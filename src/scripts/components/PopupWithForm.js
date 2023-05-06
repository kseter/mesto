import {Popup} from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
    };

    _getInputValues(){
        this._inputList = this._popup.querySelectorAll('.popup__form-item');
    
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        
        return this._formValues;
    };


    setEventListeners() {
        super.setEventListeners();

        this._popupForm = this._popup.querySelector('.popup__form')
        this._popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        this._handleFormSubmit(this._getInputValues());

        this.close();

        });
      };

      close(){
        super.close();
        this._popupForm.reset();
      };
  
      renderLoading(isLoading,initialText,loadingText){
        this._submitButton = this._popupForm.querySelector('.popup__submit-button')
        if (isLoading) {
          this._submitButton.innerText = loadingText;
        }
        else {
          this._submitButton.innerText = initialText;
        }
      }

}