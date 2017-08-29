import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import NameEntry from './NameEntry';

export default withRouter(connect(mapStateToProps)(NavBar))

function mapStateToProps ({channels}) {
  // console.log('channels: ', channels)
  return {channels}
}

export function NavBar ({location, channels}) {
  const channelId = +location.pathname.split('/').pop()
  const currentChannel = channels.find(channel => {
    return channel.id === channelId
  })
  // console.log(channels)
  return (
    <nav>
      <h3>#{currentChannel.name || 'Unnamed'}</h3>
      <NameEntry />
    </nav>
  );
}
