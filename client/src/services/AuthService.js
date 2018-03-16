

class AuthService {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${localStorage.account.token}`}
  }

  static login(credentials) {

    const request = new Request(process.env.REACT_APP_API_URL + 'login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    })


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })

  }

  USANDO_HEADER(credentials) {
    const headers = this.requestHeaders();

    const request = new Request(process.env.REACT_APP_API_URL + 'login', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({auth: credentials})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })

  }

  static isLogged() {

    if( !localStorage.account ||  !localStorage.account.token) return false

    return true
  }


}

export default AuthService;
