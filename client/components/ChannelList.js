import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!

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
              <span># {channel.name}</span>
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
function mapStateToProps (state) {
  return {
    channels: state.channels,
    messages: state.messages
  }
}

const ChannelListContainer = connect(mapStateToProps)(ChannelList)

export default ChannelListContainer
