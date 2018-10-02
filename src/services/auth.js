/*
  Mock only, in reality this would extend from baseservice and use api-calls.
*/

const response = {
  name: 'John',
  email: 'example@example.com'
}

class AuthService {
  login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({
          response
        })
      },2500);
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({
          response: data
        })
      },2500);
    });
  }
}

export default AuthService;