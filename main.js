(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===e(i)?i:String(i)),n)}var i}var r=function(){function e(t,r){var o=t.data,n=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._templateSelector=r,this._handleCardClick=n}var r,o;return r=e,(o=[{key:"_getTemplate",value:function(){return document.getElementById(this._templateSelector).content.cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__text").textContent="".concat(this._name),this._cardImage.src="".concat(this._link),this._cardImage.setAttribute("alt","".concat(this._name)),this._element}},{key:"_handleButtonLike",value:function(){this._buttonLike.classList.toggle("element__like-button_active")}},{key:"_handleButtonDelete",value:function(){this._buttonDelete.closest(".element").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage=this._element.querySelector(".element__image"),this._cardImage.addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})})),this._buttonLike=this._element.querySelector(".element__like-button"),this._buttonLike.addEventListener("click",(function(){e._handleButtonLike()})),this._buttonDelete=this._element.querySelector(".element__delete-button"),this._buttonDelete.addEventListener("click",(function(){e._handleButtonDelete()}))}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var i=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=r,this._formElementSelector=t.formSelector,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._errorElementActiveSelector=t.errorElementActiveSelector,this._formErrorSelector=t.formErrorSelector,this._buttonSaveActiveSelector=t.buttonSaveActiveSelector,this._buttonSaveSelector=t.buttonSaveSelector,this._formInputSectionSelector=t.formInputSectionSelector}var t,r;return t=e,(r=[{key:"_hideError",value:function(e){e.textContent=" ",e.classList.remove(this._errorElementActiveSelector)}},{key:"_showError",value:function(e,t){e.textContent=t,e.classList.add(this._errorElementActiveSelector)}},{key:"_checkInputState",value:function(e){this._formInputSection=e.parentNode,this._formError=this._formInputSection.querySelector(this._formErrorSelector),e.validity.valid?this._hideError(this._formError):this._showError(this._formError,e.validationMessage)}},{key:"_enableButton",value:function(){this._buttonSubmit.removeAttribute("disabled"),this._buttonSubmit.classList.remove(this._buttonSaveActiveSelector)}},{key:"disableButton",value:function(){this._buttonSubmit.setAttribute("disabled",!0),this._buttonSubmit.classList.add(this._buttonSaveActiveSelector)}},{key:"_toggleButtonState",value:function(e,t){e.every((function(e){return e.validity.valid}))?this._enableButton(t):this.disableButton(t)}},{key:"_setEventListeners",value:function(){var e=this;this._inputs=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonSubmit=this._formElement.querySelector(this._buttonSaveSelector),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputState(t),e._toggleButtonState(e._inputs,e._buttonSubmit)}))})),this._toggleButtonState(this._inputs,this._buttonSubmit)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u={formSelector:".popup__form",inputSelector:".popup__input",buttonSaveSelector:".popup__save-button",buttonSaveActiveSelector:"popup__save-button_inactive",formErrorSelector:".popup__form-item_error",errorElementActiveSelector:"popup__form-item_error_active",buttonEditSelector:".profile__edit-button",closeButtonsSelector:".popup__close-button",popupSelector:".popup",popupProfileSelector:".popup_type_user",formProfileSelector:".popup__form_type_user",nameInputSelector:".popup__form-item_user_name",aboutInputSelector:".popup__form-item_user_about",userNameSelector:".profile__user-name",userAboutSelector:".profile__user-about",cardAddButtonSelector:".profile__add-button",popupAddCardSelector:".popup_type_new-place",formAddCardSelector:".popup__form_type_new-place",cardNameInputSelector:".popup__form-item_card_name",cardLinkInputSelector:".popup__form-item_card_link",cardContainerSelector:".elements",cardTemplateSelector:"card",popupImageFullscreenSelector:".popup_type_image-fullscreen",imageButtonCloseSelector:".popup__close-button_type_image-fullscreen",popupImageSelector:".popup__image",popupParagraphSelector:".popup__paragraph",buttonClosePopupImageSelector:".popup__close-button_type_image-fullscreen",popupOpenSelector:"popup_opened",formInputSectionSelector:".popup__form-section"},c=document.querySelector(u.buttonEditSelector),l=(document.querySelectorAll(u.closeButtonsSelector),Array.from(document.querySelectorAll(u.popupSelector)),document.querySelector(u.popupProfileSelector),document.forms["profile-form"]),a=document.querySelector(u.nameInputSelector),p=document.querySelector(u.aboutInputSelector),s=(document.querySelector(u.userNameSelector),document.querySelector(u.userAboutSelector),document.querySelector(u.cardAddButtonSelector)),f=(document.querySelector(u.popupAddCardSelector),document.forms["place-form"]);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===m(n)?n:String(n)),o)}var n}document.querySelector(u.cardNameInputSelector),document.querySelector(u.cardLinkInputSelector),document.querySelector(".popup_type_image-fullscreen"),document.querySelector(".popup__image"),document.querySelector(".popup__paragraph"),document.querySelector(".elements");var _=function(){function e(t,r){var o=t.item,n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardsArray=o,this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._cardsArray.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function d(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===b(n)?n:String(n)),o)}var n}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){e._handleOverlayClick(t)}))}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function S(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===h(n)?n:String(n)),o)}var n}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},g.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,r,o,n,i=(o=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(n){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupParagraph=t._popup.querySelector(".popup__paragraph"),t}return t=u,(r=[{key:"open",value:function(e){var t=e.name,r=e.link;this._popupImage.src=r,this._popupParagraph.textContent=t,this._popupImage.setAttribute("alt",t),g(w(u.prototype),"open",this).call(this)}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==j(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===j(n)?n:String(n)),o)}var n}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},O.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,r,o,n,i=(o=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(o);if(n){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._handleFormSubmit=o,t._popupForm=t._popup.querySelector(".popup__form"),t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__form-item"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;O(L(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){O(L(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function q(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==A(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==A(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===A(n)?n:String(n)),o)}var n}var B=new(function(){function e(t){var r=t.userInfoSelector,o=t.userAboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userInfo=document.querySelector(r),this._userAbout=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userInfo.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.about;this._userInfo.textContent=t,this._userAbout.textContent=r}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({userInfoSelector:".profile__user-name",userAboutSelector:".profile__user-about"}),T=new C({popupSelector:".popup_type_user",handleFormSubmit:function(e){var t=e.name,r=e.about;B.setUserInfo({name:t,about:r}),V.disableButton()}});T.setEventListeners(),c.addEventListener("click",(function(){var e=B.getUserInfo();a.value=e.name,p.value=e.about,T.open()}));var x=new E(".popup_type_image-fullscreen");function R(e){var t=e.name,r=e.link;x.open({name:t,link:r})}function D(e){return new r({data:e,handleCardClick:R},"card").generateCard()}x.setEventListeners();var F=new _({item:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=D(e);F.addItem(t)}},u.cardContainerSelector);F.renderItems();var N=new C({popupSelector:".popup_type_new-place",handleFormSubmit:function(e){var t=D({name:e.name,link:e.link});F.addNewItem(t),U.disableButton()}});N.setEventListeners(),s.addEventListener("click",(function(){N.open()}));var V=new i(u,l);V.enableValidation();var U=new i(u,f);U.enableValidation()})();