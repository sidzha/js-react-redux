import React, { Component } from 'react';
import { connect } from 'react-redux';
import rootReducer from '../store/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    rootReducer: (name, text) => dispatch(rootReducer(name, text))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const text = this.state.text;
    this.props.rootReducer(name, text);

    this.setState({
      name: '',
      text: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-comment-form">
        <label className="form-label">
          Ваше имя:
          <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            value={this.state.name}
            name="name"
            required
          />
        </label>

        <label className="form-label">
          Ваш комментарий:
          <textarea
            onChange={this.handleChange}
            className="form-control"
            rows="5"
            cols="40"
            name="text"
            value={this.state.text}
            required
          />
        </label>

        <button type="submit" className="submit-button">
          Отправить
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
