import axios from 'axios';


const GET_CHANNELS = 'GET_CHANNELS';
const GET_CHANNEL = 'GET_CHANNEL';

export function getChannels (channels) {
  return {
    type: GET_CHANNELS,
    channels
  }
}

export function getChannel (channel) {
  return {
    type: GET_CHANNEL,
    channel
  }
}

export function fetchChannels () {
  return function thunk (dispatch) {
    return axios.get('/api/channels')
      .then(res => res.data)
      .then(channels => {
        const action = getChannels(channels)
        dispatch(action)
      })
      .catch(console.error.bind(console))
  }
}

export default (state = [], {
  type,
  channel,
  channels
}) => {
  switch (type) {
    case GET_CHANNEL:
      return [ ...state, channel ]
    case GET_CHANNELS:
      return channels
    default:
      return state;
  }
}
