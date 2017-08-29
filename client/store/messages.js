import axios from 'axios';

const GET_MESSAGE = 'GET_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';

export function getMessage (message) {
  const action = {type: GET_MESSAGE, message};
  return action;
}

export function getMessages (messages) {
  const action = {type: GET_MESSAGES, messages};
  return action;
}

export function fetchMessages () {
  return function thunk (dispatch) {
    return axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => {
        const action = getMessages(messages);
        dispatch(action);
      });
  }
}

export default (state = [], {
  type,
  messages,
  message
}) => {
  switch (type) {
    case GET_MESSAGES:
      return messages
    case GET_MESSAGE:
      return [ ...state, message ]
    default:
      return state;
  }
}
