import {
  TOGGLE_SHOW_ITEM,
  UPDATE_EDITOR_STATUS,
  TOGGLE_EDITOR,
} from '../actions/app.actions';
import { EDITOR_STATUS } from '../helpers/tools.helper';


const initialState = {
  font: 'Source Code Pro, monospace',
  editorStatus: EDITOR_STATUS.WAITING,
  paperSize: 'a4',
};

const getItemToToggle = (state, action) => ({
  [action.item]: !state[action.item],
});

const toggleShowItem = (state, action) => ({
  ...state,
  ...getItemToToggle(state, action),
});

const updateResumeEditorStatus = (state, action) => ({
  ...state,
  editorStatus: action.status,
});

const toggleEditor = state => ({
  ...state,
  editorStatus: EDITOR_STATUS.WAITING,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_ITEM:
      return (
        toggleShowItem(state, action));
    case UPDATE_EDITOR_STATUS:
      return updateResumeEditorStatus(state, action);
    case TOGGLE_EDITOR:
      return toggleEditor(state);

    default:
      return state;
  }
};
