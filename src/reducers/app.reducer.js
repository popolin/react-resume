import {
  TOGGLE_TOOLBAR,
  TOGGLE_EDITOR,
  TOGGLE_JSON,
  TOGGLE_SIMPLES,
} from '../actions/app.actions';

const initialState = {
  toolbarOpen: false,
  editorOpen: false,
  jsonOpen: false,
  simplesOpen: false,
};

const toggleToolbar = state => ({
  ...state,
  toolbarOpen: !state.toolbarOpen,
});

const toggleEditor = state => ({
  ...state,
  editorOpen: !state.editorOpen,
  toolbarOpen: state.editorOpen,
});

const toggleJson = state => ({
    ...state,
    jsonOpen: !state.jsonOpen,
    toolbarOpen: state.jsonOpen,
  });

const toggleSimples = state => ({
    ...state,
    simplesOpen: !state.simplesOpen,
    toolbarOpen: state.jsonOpen,
    });

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TOOLBAR:
      return toggleToolbar(state);
    case TOGGLE_EDITOR:
      return toggleEditor(state);
    case TOGGLE_JSON:
      return toggleJson(state);
    case TOGGLE_SIMPLES:
      return toggleSimples(state);
    default:
      return state;
  }
};
