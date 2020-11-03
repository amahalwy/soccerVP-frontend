let _nullUser = {
  user: null
}

const session = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    default:
      return oldState;
  }
}

export default session;