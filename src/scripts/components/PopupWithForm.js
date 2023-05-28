import {Popup} from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popup.querySelectorAll('.popup__form-item');
        this._popupForm = this._popup.querySelector('.popup__form');
        this._submitButton = this._popupForm.querySelector('.popup__save-button');
        this.setEventListeners();
    };

    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    };

    renderLoading(isLoading, initialText,loadingText){
      if (isLoading) {
        this._submitButton.value = loadingText;
      }
      else {
        this._submitButton.value = initialText;
      }
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        });
      };
      
      close(){
        super.close();
        this._popupForm.reset();
      };
}