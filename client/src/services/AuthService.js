

class AuthService {

  static requestHeaders() {
    let account = JSON.parse(localStorage.account);
    return {'AUTHORIZATION': `Bearer ${account.token}`}
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
        console.log('There has been a problem with your login fetch operation: ' + error.message);
    });

  }

  static logout() {
    localStorage.removeItem('account');
  }

  static currentAccount() {
    const headers = this.requestHeaders();

    const request = new Request(process.env.REACT_APP_API_URL + 'api/user/current', {
      method: 'GET',
      headers: headers
      //body: JSON.stringify({auth: credentials})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(function(error) {
        console.log('There has been a problem with currentAccount fetch operation: ' + error.message);
    });

  }

  static isLogged() {
    // REVISAR QUE NO ESTE VENCIDO
    let account = JSON.parse(localStorage.getItem('account'));
    if( !account || !account.token) return false

    return true
  }

  static getInitialState() {
    const headers = this.requestHeaders();

    const request = new Request(process.env.REACT_APP_API_URL + 'api/initialstate', {
      method: 'GET',
      headers: headers
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(function(error) {
        console.log('There has been a problem with Initil state fetch operation: ' + error.message);
    });
  }

}

export default AuthService;
