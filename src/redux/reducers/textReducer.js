import ACTIONS from "./../actions";
import { FORMAT } from "../../utilities/textFormat";

const current = { text: "{}", format: FORMAT.JSON };
const initialState = { current, history: [], editor: current.text };

export default function textReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_TEXT:
      const current = action.current;
      return {
        ...state,
        current: current,
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
