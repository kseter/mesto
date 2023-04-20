export class UserInfo {
    constructor({ userInfoSelector, userAboutSelector}) {
        this._userInfo = document.querySelector(userInfoSelector)
        this._userAbout = document.querySelector(userAboutSelector)
    };

    getUserInfo(){
        return {
            name: this._userInfo.textContent,
            about: this.u_serAbout.textContent
        };
    };

    setUserInfo({name, about}){
    const userName = document.querySelector('.profile__user-name');
    const userAbout = document.querySelector('.profile__user-about');
    userName.textContent = name;
    userAbout.textContent = about;
    };
}