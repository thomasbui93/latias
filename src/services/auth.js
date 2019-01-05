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

export const signOut = async () => {
  const data = await httpClient.post('/api/auth/logout', {
    token: sessionStorage.getItem(auth.token),
  });
  if (!data.error) {
    sessionStorage.removeItem(auth.token);
    sessionStorage.removeItem(auth.refreshToken);
  }
  return !data.error;
};

export const setToken = (token, refreshToken) => {
  sessionStorage.setItem(auth.token, token);
  sessionStorage.setItem(auth.refreshToken, refreshToken);
};
