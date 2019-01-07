import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('dateNormalized', (value) => {
  if (!value) return '';
  return dayjs(value).format('YYYY-MM-DD');
});
