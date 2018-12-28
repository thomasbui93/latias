import httpClient from './core/http';

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
