export class Section {
constructor({item, renderer}, containerSelector) {
    this._cardsArray = item, 
    this._renderer = renderer,
    this._container = document.querySelector(containerSelector)
    };

    renderItems() {
        this._cardsArray.forEach(card => this._renderer(card));
    };

    addItem(card){
        this._container.append(card);
    };

    addNewItem(card){
        this._container.prepend(card);
    }
};