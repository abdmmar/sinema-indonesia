class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector(`#search`).value;
    }

    render(){
        this.innerHTML = `
        <form action="/" class="flex flex-row" method="GET">
            <input type="search" id="search" 
            class="appearance-none p-3 px-5 w-full rounded-l-md bg-gray-800 text-white focus:outline-none focus:text-white"
            placeholder="Cari sinema kesukaanmu disini">
            <button id="btnSearch" class="text-center bg-blue-500 rounded-r-md p-3 px-4 font-medium focus:outline-none focus:bg-blue-600 hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>   
            </button>
        </form>
        `

        this.querySelector(`#btnSearch`).addEventListener(`click`, this._clickEvent);
    }
}

customElements.define(`search-bar`, SearchBar);