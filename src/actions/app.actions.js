export const TOGGLE_TOOLBAR = 'TOGGLE_TOOLBAR';
export const toggleToolbar = () => ({
  type: TOGGLE_TOOLBAR,
});

export const TOGGLE_EDITOR = 'TOGGLE_EDITOR';
export const toggleEditor = () => ({
  type: TOGGLE_EDITOR,
});

export const TOGGLE_JSON = 'TOGGLE_JSON';
export const toggleJson = () => ({
  type: TOGGLE_JSON,
});

export const TOGGLE_SIMPLES = 'TOGGLE_SIMPLES';
export const toggleSimples = () => ({
  type: TOGGLE_SIMPLES,
});

export const NEW_RESUME = 'NEW_RESUME';
export const newResume = () => ({
  type: NEW_RESUME,
});

export const TOGGLE_SHOW_ITEM = 'TOGGLE_SHOW_ITEM';
export const toggleShowItem = item => ({
  type: TOGGLE_SHOW_ITEM,
  item,
});

export const UPDATE_RESUME = 'UPDATE_RESUME';
export const updateResume = (resume, autoSave) => ({
  type: UPDATE_RESUME,
  resume,
  autoSave,
});

export const UPDATE_EDITOR_STATUS = 'UPDATE_RESUME_STAUS';
export const updateResumeEditorStatus = status => ({
  type: UPDATE_EDITOR_STATUS,
  status,
});

export const TOGGLE_AUTO_SAVE = 'TOGGLE_AUTO_SAVE';
export const toggleAutoSave = () => ({
  type: TOGGLE_AUTO_SAVE,
});
