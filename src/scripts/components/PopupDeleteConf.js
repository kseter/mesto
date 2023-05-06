import { PopupWithForm } from "./PopupWithForm.js";

export class PopupDeleteConf extends PopupWithForm {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._popup = document.querySelector(popupSelector)
    }

close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);

        this._popupForm = this._popup.querySelector('.popup__form')
        this._popupForm.removeEventListener('submit', this._submitDelete);
      }
    
// setEventListeners(data) {
//         super.setEventListeners();
//         this._popupForm.addEventListener('submit', this._submitDelete);
//         this._data = data;  
//         };
    
// _submitDelete(evt) {
//         evt.preventDefault();
//         this._handleFormSubmit(this._data);
//       }

setEventListeners(data) {
            this._data = data;  
            super.setEventListeners();

            this._popupForm.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._handleFormSubmit(this._data);

            });
            };
    }
