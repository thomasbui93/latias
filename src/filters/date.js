import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('dateNormalized', (value) => {
  if (!value) return '';
  const date = dayjs(value);
  return date.isValid() ? dayjs(value).format('YYYY-MM-DD') : '';
});
