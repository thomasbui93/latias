import auth from '@/services/constants/auth';

export const unAuthorizedPaths = ['signIn', 'signUp'];

export const isAuthenticated = () => Boolean(sessionStorage.getItem(auth.token)
  && sessionStorage.getItem(auth.refreshToken));
