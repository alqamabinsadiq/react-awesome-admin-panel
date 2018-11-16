
export const actions = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

export const openModal = (type) => ({
  type: actions.OPEN_MODAL,
  data: type
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL,
});