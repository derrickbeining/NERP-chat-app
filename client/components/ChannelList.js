import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';

function ChannelList ({messages, channels}) {
  return (
    <ul>
      {channels.map(channel => {
        const numberOfMessages = messages.filter(message => {
          return message.channelId === channel.id
        }).length
        return (
          <li key={channel.id}>
            <NavLink to={`/channels/${channel.id}`} activeClassName="active">
              <span>#{channel.name}</span>
              <span className="badge">{numberOfMessages}</span>
            </NavLink>
          </li>
        )
      })}
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
function mapStateToProps ({channels, messages}) {
  console.log('channelList channels: ', channels)
  return {
    channels,
    messages
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: (event) => {

    }
  }
}

export default withRouter(connect(mapStateToProps)(ChannelList))
