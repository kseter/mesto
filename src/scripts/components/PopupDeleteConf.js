import { Popup } from "./Popup.js";

export class PopupDeleteConf extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._popup = document.querySelector(popupSelector)
        this.setEventListeners();
    };

setSubmitCallback(action) {
    this._handleFormSubmit = action;
 };

setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm = this._popup.querySelector('.popup__delete-card-button')
    this._buttonConfirm.addEventListener('click', () => {
    this._handleFormSubmit()
        });
    };
}