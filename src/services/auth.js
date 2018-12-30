import httpClient from './core/http';
import auth from './constants/auth';

export const signIn = (email, password) => httpClient.post('/api/auth/authenticate', {
  email,
  password,
});

export const signUp = (firstName, lastName, email, password) => httpClient.post('/api/auth/register', {
  email,
  password,
  firstName,
  lastName,
});

export const signOut = () => {
  sessionStorage.removeItem(auth.token);
  sessionStorage.removeItem(auth.refreshToken);
};

export const setToken = (token, refreshToken) => {
  sessionStorage.setItem(auth.token, token);
  sessionStorage.setItem(auth.refreshToken, refreshToken);
};
