import { ADD_DATA } from "./appActionTypes";

let data = 0;
export const app = (content) => ({
  type: ADD_DATA,
  payload: {
    data: data + 1,
    content,
  },
});
