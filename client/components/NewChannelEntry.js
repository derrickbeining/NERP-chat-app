import React, {Component} from 'react';
import {connect} from 'react-redux';
import {writeChannel, postChannel} from '../store';

export function NewChannelEntry ({newChannelEntry, handleChange, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter channel name"
          value={newChannelEntry}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
function mapStateToProps ({newChannelEntry}) {
  return {
    newChannelEntry
  }
}

function mapDispatchToProps (dispatch, {history}) {
  return {
    handleChange: function (event) {
      dispatch(writeChannel(event.target.value))
    },

    handleSubmit: function (event) {
      event.preventDefault()
      const channelName = event.target.channelName.value
      dispatch(postChannel({name: channelName}, history))
      dispatch(writeChannel(''))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)

