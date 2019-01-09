import Vue from 'vue';
import dayjs from 'dayjs';

export const normalizedDate = (value) => {
  if (!value) return '';
  const date = dayjs(value);
  return date.isValid() ? dayjs(value).format('YYYY-MM-DD') : '';
};

export default Vue.filter('dateNormalized', normalizedDate);
