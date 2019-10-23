import axios from "axios";

const postList = (list, user) => {
  const { email = "" } = user;
  if (email) {
    return axios.post("http://localhost:3001/api/list", { email, list });
  }
};

export default postList;
