import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";
const KEY = "21327574-a9e02909bbc977a72a3d5931a";

const fetchImages = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

const exportedObject = {
  fetchImages,
};

export default exportedObject;
