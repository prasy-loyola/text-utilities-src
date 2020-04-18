import ACTIONS from "./../actions";
import { getTextFormat } from "../../utilities/textFormat";
import { initialText, history } from "./default";

const current = { text: initialText, format: getTextFormat(initialText) };
const initialState = { current, history, editor: current.text };

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
