const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';

export function setCurrentChannel (channel) {
  const action = {type: SET_CURRENT_CHANNEL, channel};
  return action;
}

export default (state = {}, {type, channel}) => {
  switch (type) {
    case SET_CURRENT_CHANNEL:
      return channel
    default:
      return state;
  }
}
