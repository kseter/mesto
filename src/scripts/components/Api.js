export class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl
      this.headers = headers
    }

    _checkResponse(res) {
        if(res.ok){
            return res.json()
        } else {
            return Promise.reject(`${res.status} ${res.statsText}`)
        }
    };

    requestUserInfo(){
       return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers
       }
    )
    .then(this._checkResponse);
    };
   
    getInitialCards(){
        return fetch(`${this.baseUrl}/cards`, {
         headers: this.headers
        })
        .then(this._checkResponse);
     };

     setUserInfo(data){
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
              name: data.name,
              about: data.about,
            })
          })
          .then(this._checkResponse)
     };

     addNewCard(data){
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
              name: data.name,
              link: data.link,
            })
          })
          .then(this._checkResponse)
     };

     deleteLike(data) {
        return fetch(`${this.baseUrl}/cards/${data._id}/likes`, {
                    method: 'DELETE',
                    headers: this.headers
                  })
                  .then(this._checkResponse)
     };

     setLike(data) {
        return fetch(`${this.baseUrl}/cards/${data._id}/likes`, {
                      method: 'PUT',
                      headers: this.headers
                    })
                    .then(this._checkResponse)
     };

     deleteCard(data){
        return fetch(`${this.baseUrl}/cards/${data}`, {
            method: 'DELETE',
            headers: this.headers
          })
     };

     changeAvatar(data){
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: data.link
              })
          })
          .then(this._checkResponse)
     };
     }

  
  

 