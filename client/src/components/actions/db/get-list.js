import axios from "axios";

const getList = (email, onSuccess, onFailure) => {
  axios
    .get(`http://localhost:3001/api/list`, { params: { email } })
    .then(onSuccess)
    .catch(onFailure);
};

export default getList;
