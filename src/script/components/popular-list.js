import "./popular-item.js";

class PopularList extends HTMLElement{
    set populars(populars){
        this._populars = populars;
        this.render();
    }

    renderError(message){
        this.innerHTML = ``;
        this.innerHTML += `<h3 class="text-xl text-gray-100 font-bold">${message}</h3>`; 
    }

    render(){
        this.innerHTML = ``;
        this._populars.forEach(popular => {
            const popularItem = document.createElement(`popular-item`);
            popularItem.popular = popular;
            this.appendChild(popularItem);
        })
    }
}

customElements.define(`popular-list`, PopularList);