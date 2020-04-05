import ACTIONS from "./index";

export function setCurrentText(current) {
  return { type: ACTIONS.SET_CURRENT_TEXT, current };
}

export function setEditorText(text) {
  return { type: ACTIONS.SET_EDITOR_TEXT, text };
}
