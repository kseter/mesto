export class Section {
constructor({renderer}, containerSelector) {
    this._renderer = renderer,
    this._container = document.querySelector(containerSelector)
    };

    renderItems(cards) {
        cards.forEach(card => {
            return this._renderer(card);
        })
    };

    addItem(card){
        this._container.append(card);
    };

    addNewItem(card){
        this._container.prepend(card);
    }
};