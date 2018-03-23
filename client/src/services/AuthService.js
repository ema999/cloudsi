

class AuthService {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${localStorage.account.token}`}
  }

  static login(credentials) {

    const request = new Request(process.env.REACT_APP_API_URL + 'api/user/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    })


    return fetch(request).then(response => {
      return response.json();
    }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });

  }

  USANDO_HEADER(credentials) {
    const headers = this.requestHeaders();

    const request = new Request(process.env.REACT_APP_API_URL + 'login', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({auth: credentials})
    })

    return fetch(request).then(response => {
      if (!response.ok) console.log('Network response was not ok.');
      return response.json();
    }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });

  }

  static isLogged() {
    let account = JSON.parse(localStorage.getItem('account'));
    if( !account || !account.token) return false

    return true
  }


}

export default AuthService;
