
const users =  (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    default:
      return oldState;
  }
}

export default users;