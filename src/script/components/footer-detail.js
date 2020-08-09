class FooterDetail extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="md:flex md:flex-row">
                <img class="w-24" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" loading="lazy">
                <p class="text-xs text-gray-500 mt-2 w-3/4 md:w-auto md:mt-0 md:ml-2">This product uses the TMDb API but is not endorsed or certified by TMDb </p>
            </div>
            <a class="p-3 rounded-md hover:bg-blue-500 " href="https://github.com/abdmmar" target="_blank">
                Github
            </a>
        </div>  
        `
    }
}

customElements.define(`footer-detail`, FooterDetail);