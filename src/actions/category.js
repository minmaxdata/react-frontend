import * as types from "./types";

export const setCategory = category => {
  return {
    type: types.SET_CATEGORY,
    category
  };
};
