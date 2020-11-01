
export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    default:
      return oldState;
  }
}