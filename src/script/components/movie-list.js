import "./movie-item.js";

class MovieList extends HTMLElement{
    set movies(movies){
        this._movies = movies;
        this.render();
    }

    renderError(message){
        this.innerHTML = ``;
        this.innerHTML += `<h3 class="text-xl text-gray-100 font-bold">${message}</h3>`; 
    }

    render(){
        this.innerHTML = ``;
        this._movies.forEach(movie => {
            const movieItem = document.createElement(`search-item`);
            movieItem.movie = movie;
            this.appendChild(movieItem);
        })
    }
}

customElements.define(`movie-list`, MovieList);