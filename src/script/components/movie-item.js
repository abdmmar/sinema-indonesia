import moment from 'moment';

class MovieItem extends HTMLElement{
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    convertDateRelease(dateString){
        moment.locale(`id`);
        const momentObj = moment(dateString, 'YYYY-MM-DD');
        const momentString = momentObj.format('DD MMM YYYY');
        return momentString;
    }

    render(){
        this.innerHTML = `
        <div class="card md:flex-row transform motion-reduce:transform-none transition ease-in-out duration-200">
            <img 
            class="rounded-md w-full object-cover md:w-2/5 lg:shadow-lg"
            src="https://image.tmdb.org/t/p/w200${this._movie.poster_path}"
            alt="${this._movie.original_title}">
            <div class="py-2 mt-2 md:mt-0 md:ml-4 lg:py-4 lg:ml-6">
                <div class="flex justify-between items-center lg:flex-col-reverse lg:items-start">
                    <div class="text-gray-200 text-sm lg:mt-2">
                        ${this.convertDateRelease(this._movie.release_date)}
                    </div>
                    <div class="badge bg-blue-200 text-blue-600">
                        <svg class="feather feather-star inline mr-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        ${this._movie.vote_average}
                    </div>
                </div> 
                <h3 class="font-bold text-lg text-white my-2 leading-tight lg:my-3">
                    ${this._movie.original_title}
                </h3>
                <p class="text-gray-500 text-base">
                    ${this._movie.overview}
            </div>
        </div>
        `
    }
}

customElements.define(`search-item`, MovieItem);