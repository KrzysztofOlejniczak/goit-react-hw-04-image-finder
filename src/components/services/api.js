import axios from 'axios';

const KEY = '32245226-f27b1af2cde9216d3910bfcd8';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
});

export const fetchSearch = async (searchQuery, page) => {
  const response = axios.get(`?q=${searchQuery}&page=${page}&${searchParams}`);
  return response;
};

export default fetchSearch;
