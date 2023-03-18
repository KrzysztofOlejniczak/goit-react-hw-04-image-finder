import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchSearch = async (searchQuery, page) => {
  const response = axios.get(
    `?q=${searchQuery}&page=${page}&key=32245226-f27b1af2cde9216d3910bfcd8&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};

export default fetchSearch;
