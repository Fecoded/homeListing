import { FETCH_HOUSES } from "../action/houseAction";

const initialState = {
  houses: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOUSES:
      return {
        ...state,
        houses: payload,
      };
  }

  return state;
}
