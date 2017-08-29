import React from 'react';
import {connect} from 'react-redux';
import {postMessage, writeMessage} from '../store';

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry)

function mapStateToProps ({newMessageEntry, name}) {
  return {
    newMessageEntry,
    name
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleChange: (event) => {
      dispatch(writeMessage(event.target.value))
    },
    createSubmitHandler: (name, content, channelId) => {
      return event => {
        event.preventDefault();
        dispatch(postMessage({name, content, channelId}));
        dispatch(writeMessage(''));
      }
    }
  }
}

export function NewMessageEntry ({
  name,
  newMessageEntry,
  channelId,
  handleChange,
  createSubmitHandler
}) {
  return (
    <form
      id="new-message-form"
      onSubmit={createSubmitHandler(name, newMessageEntry, channelId)}
    >
      <div className="input-group input-group-lg">
        <input
          className="form-control"
          type="text"
          name="content"
          value={newMessageEntry}
          onChange={handleChange}
          placeholder="Say something nice..."
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Chat!</button>
        </span>
      </div>
    </form>
  );
}

