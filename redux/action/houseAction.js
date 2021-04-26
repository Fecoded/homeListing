import axios from "axios";

export const FETCH_HOUSES = "FETCH_HOUSES";
export const CREATE_HOUSES = "CREATE_HOUSES";

// 192.168.13.104

export const fetchHouses = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://192.168.13.100:3000/api/houses");

      dispatch({
        type: FETCH_HOUSES,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
