import axios from 'axios';
import socket from '../socket';
import {getMessage} from './index'

const WRITE_MESSAGE = 'WRITE_MESSAGE';

export function writeMessage (content) {
  const action = {type: WRITE_MESSAGE, content};
  return action;
}

export function postMessage (message) {
  return function thunk (dispatch) {
    return axios.post('/api/messages', message)
      .then(res => res.data)
      .then(newMessage => {
        const action = getMessage(newMessage);
        dispatch(action);
        socket.emit('new-message', newMessage);
      })
      .catch(console.error.bind(console))
  }
}

export default (state = '', {type, content}) => {
  switch (type) {
    case WRITE_MESSAGE:
      return content
    default:
      return state;
  }
}
