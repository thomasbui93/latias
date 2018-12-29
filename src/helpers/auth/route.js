export const isAuthenticated = () => sessionStorage.getItem('x-token')
  && sessionStorage.getItem('x-refreshToken');

export const unAuthorizedPaths = ['signIn', 'signUp'];
