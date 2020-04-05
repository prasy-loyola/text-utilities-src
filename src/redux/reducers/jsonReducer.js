import ACTIONS from "../actions";

export default function jsonReducer(
  state = { json1: "{}", json2: "{}" },
  action
) {
  switch (action.type) {
    case ACTIONS.SET_JSON1:
      return { ...state, json1: action.json };
    default:
      return state;
  }
}
