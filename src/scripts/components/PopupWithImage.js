import {Popup} from "./Popup.js"

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupImage = this._popup.querySelector('.popup__image')
        this._popupParagraph = this._popup.querySelector('.popup__paragraph')
    };

    open({ name, link }){

            this._popupImage.src = link;
            this._popupParagraph.textContent = name;
            this._popupImage.setAttribute('alt', name);

            super.open();

        };
    }