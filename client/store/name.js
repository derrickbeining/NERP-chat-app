
const UPDATE_NAME = 'UPDATE_NAME';

export function updateName (name) {
  const action = {type: UPDATE_NAME, name};
  return action;
}

export default (state = '', {type, name}) => {
  switch (type) {
    case UPDATE_NAME:
      return name
    default:
      return state;
  }
}
