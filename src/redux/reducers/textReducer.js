import ACTIONS from "./../actions";
import { getTextFormat } from "../../utilities/textFormat";

const initialText = "<book><title>Harry Potter</title></book>";

const current = { text: initialText, format: getTextFormat(initialText) };
const initialState = { current, history: [], editor: current.text };

export default function textReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_TEXT:
      const current = action.current;
      return {
        ...state,
        current: current,
        editor: current.text,
        history: [current, ...state.history].slice(-10),
      };
    case ACTIONS.SET_EDITOR_TEXT:
      return {
        ...state,
        editor: action.text,
      };

    default:
      return state;
  }
}
