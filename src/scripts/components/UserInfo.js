export class UserInfo {
    constructor({ userInfoSelector, userAboutSelector }) {
        this._userInfo = document.querySelector(userInfoSelector)
        this._userAbout = document.querySelector(userAboutSelector)
    };

    getUserInfo(){
        return {
            name: this._userInfo.textContent,
            about: this._userAbout.textContent
        }; 
    };

    setUserInfo({name, about}){
    this._userInfo.textContent = name;
    this._userAbout.textContent = about;
    };
}