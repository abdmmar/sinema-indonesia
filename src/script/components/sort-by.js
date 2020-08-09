class SortBy extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set changeEvent(event){
        this._changeEvent = event;
        this.render();
    }

    get value(){
        return this._changeEvent.target.value;
    }

    render(){
        this.innerHTML = `
        <div class="relative">
            <select id="sort" class="block appearance-none w-full bg-gray-900 border border-gray-700 text-gray-100 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-900 focus:border-gray-700">
                <option value="popularity.desc">Terpopuler</option>
                <option value="vote_count.desc">Rating Tertinggi</option>
                <option value="vote_count.asc">Rating Terendah</option>
                <option value="original_title.asc">Title (A-Z)</option>
                <option value="original_title.desc">Title (Z-A)</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-100">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div> 
        `

        this.querySelector(`#sort`).addEventListener(`change`, this._changeEvent);
    }
};

customElements.define(`sort-by`, SortBy);