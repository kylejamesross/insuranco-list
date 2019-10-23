import axios from "axios";

const deleteListItem = (user, id) => {
  const { email } = user;
  axios.delete("http://localhost:3001/api/list/item", { data: { id, email } });
};

export default deleteListItem;
