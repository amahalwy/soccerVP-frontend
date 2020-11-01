let _nullUser = {
  user: null
}

export default (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    default:
      return oldState;
  }
}