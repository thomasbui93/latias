import httpClient from '../core/http';

// eslint-disable-next-line import/prefer-default-export
export const searchService = async (filter) => {
  try {
    const response = await httpClient.get('/api/sphinx', {
      params: filter || {},
    });
    return response.data;
  } catch (err) {
    return false;
  }
};
