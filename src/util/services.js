import axios from "axios";

export const getAPI = async (path) => {
  console.log(`path: `, path);
  const result = await axios({
    method: "get",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    url: path,
  }).catch((error) => console.log(error));
  return result;
};
