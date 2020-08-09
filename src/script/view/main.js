import '../components/movie-list.js';
import '../components/popular-list.js';
import '../components/search-bar.js';
import '../components/sort-by.js';
import '../components/footer-detail.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector(`search-bar`);
    const movieList = document.querySelector(`movie-list`);
    const popularList = document.querySelector(`popular-list`);
    const sortBy = document.querySelector(`sort-by`);
    const searchTitleResult = document.querySelector(`#searchTitleResult`);
    const loaderBar = document.querySelector(`#loader`);
    
    const onButtonSearchClicked = async () => {
        event.preventDefault();
        try {
            loader();
            const result = await DataSource.searchMovies(searchElement.value);
            clearLoader();
            renderResult(result);
        } catch (error) {
            fallbackResult(error);
        }
    };

    const onLoadMovies = async () => {
        try {
            const result = await DataSource.popularMovies();
            renderResultPopular(result);
        } catch (error) {
            fallbackResultPopular(error);
        }
    }

    const onChangeSort = async (event) => {
        try {
            clearPopularList();
            const result = await DataSource.popularMovies(event.target.value);
            renderResultPopular(result);
        } catch (error) {
            fallbackResultPopular(error);
        }
    }
    
    const renderResult = movies => {
        searchTitleResult.textContent = `🔍 Hasil Pencarian "${searchElement.value}"`;
        movieList.movies = movies;
    };

    const renderResultPopular = populars => {
        popularList.populars = populars;
    }

    const fallbackResult = (message = "Check your internet connection") => {
        movieList.renderError(message);
    };

    const fallbackResultPopular = (message = "Check your internet connection") => {
        popularList.renderError(message);
    };

    
    function clearPopularList(){
        popularList.textContent = ``;
    }
    
    function loader(){
        loaderBar.innerHTML = `
        <div class="w-auto flex flex-col items-center text-gray-500 mb-10">
            <svg class="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Memuat
        </div>`;
    }

    function clearLoader(){
        loaderBar.innerHTML = ``;
    }

    searchElement.clickEvent = onButtonSearchClicked;
    sortBy.onchange =  onChangeSort;
    onLoadMovies();
}

export default main;