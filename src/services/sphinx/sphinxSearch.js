import httpClient from '../core/http';

export const getDefaultParams = () => ({
  page: 1,
  limit: 1,
  text: '',
  level: '',
  keywords: '',
  sortType: 'ASC',
  sortBy: 'createdAt',
});

export const searchService = async (filter) => {
  try {
    const response = await httpClient.get('/api/sphinx', {
      params: {
        ...getDefaultParams(),
        ...filter,
      },
    });
    return response.data;
  } catch (err) {
    return false;
  }
};
