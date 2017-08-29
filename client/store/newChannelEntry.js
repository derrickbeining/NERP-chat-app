import axios from 'axios';
import socket from '../socket';
import {getChannel} from './index'

const WRITE_CHANNEL = 'WRITE_CHANNEL';

export function writeChannel (content) {
  return {
    type: WRITE_CHANNEL,
    content
  }
}

export function postChannel (channel, history) {
  return function thunk (dispatch) {
    return axios.post('/api/channels', channel)
      .then(res => res.data)
      .then(newChannel => {
        dispatch(getChannel(newChannel))
        socket.emit('new-channel', newChannel)
        history.push(`/channels/${newChannel.id}`)
      })
  }
}

export default (state = '', {type, content}) => {
  switch (type) {
    case WRITE_CHANNEL:
      return content
    default:
      return state;
  }
}
