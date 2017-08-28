import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function NewChannelEntry ({inputValue}) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter channel name"
          value={inputValue}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
function mapStateToProps (state) {
  return {
    inputValue: state.newChannelEntry,

  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

const NewChannelEntryContainer =
  connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
