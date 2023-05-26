
export class UserInfo {
    constructor({ userInfoSelector, userAboutSelector, userAvatarSelector }) {
        this._userInfo = document.querySelector(userInfoSelector)
        this._userAbout = document.querySelector(userAboutSelector)
        this._userAvatar = document.querySelector(userAvatarSelector)
    };

    getUserInfo(){
        return {
            name: this._userInfo.textContent,
            about: this._userAbout.textContent,
            avatar: this._userAvatar.src
        }; 
    };

    setUserInfo({name, about, avatar}){
        this._userInfo.textContent = name;
        this._userAbout.textContent = about;
        if(avatar){
            this._userAvatar.src = avatar;
        } else {
            this.getUserInfo();
        }
    };
}