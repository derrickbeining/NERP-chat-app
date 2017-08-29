import React, {Component} from 'react';
import store, {updateName} from '../store';

export default class NameEntry extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleChange (evt) {
    store.dispatch(updateName(evt.target.value));
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.name}
        />
      </form>
    );
  }
}
