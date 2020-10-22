
export const EDITOR_STATUS = {
  UPDATED: 'code updated',
  WAITING: 'waiting for changes',
  ERROR: 'invalid json',
  VALIDATING: 'validating',
};

export const getStatusColor = (status) => {
  switch (status) {
    case EDITOR_STATUS.WAITING:
      return 'blue';
    case EDITOR_STATUS.ERROR:
      return 'red';
    case EDITOR_STATUS.VALIDATING:
      return 'yellow';
    case EDITOR_STATUS.UPDATED:
      return 'green';
    default:
      return undefined;
  }
};
