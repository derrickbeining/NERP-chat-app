import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import NameEntry from './NameEntry';

export default withRouter(connect(mapStateToProps)(NavBar))

function mapStateToProps ({channels}) {
  return {channels}
}

export function NavBar ({channels, match}) {
  console.log(channels)
  const currentChannel = channels.find(channel => {
    return channel.id === match.params.channelId
  })

  return (
    <nav>
      <h3>#{currentChannel || 'Unnamed'}</h3>
      <NameEntry />
    </nav>
  );
}
