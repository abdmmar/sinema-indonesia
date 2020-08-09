import moment from 'moment';

class PopularItem extends HTMLElement{
    set popular(popular){
        this._popular = popular;
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
        <div class="max-w-sm card transform motion-reduce:transform-none transition ease-in-out duration-200">
            <img 
                class="rounded-md w-full object-cover text-gray-100"
                src="https://image.tmdb.org/t/p/w200${this._popular.poster_path}"
                alt="${this._popular.original_title}">
                <div class="badge bg-blue-200 text-blue-600 mt-2">
                    <svg class="feather feather-star inline mr-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ${this._popular.vote_average}
                </div>
                <h3 class="font-bold text-base my-1 py-1 text-gray-100">${this._popular.original_title}</h3>
                <div class="text-gray-200 text-sm">
                    ${this.convertDateRelease(this._popular.release_date)}
                </div>
        </div>
        `
    }
}

customElements.define(`popular-item`, PopularItem);