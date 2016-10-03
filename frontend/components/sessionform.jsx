import React from 'react';
import { Link } from 'react-router';

export default class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {user: this.state};
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    let header = "";
    let link;
    let location;
    let errors = this.props.errors.map ( (error, idx)=> (
      <li key={idx}> {error} </li>
    ));

    if (this.props.formType === "/signup") {
      header = 'Sign Up';
      link = "Already have an account?";
      location = "/login";
    } else if (this.props.formType === "/login") {
      header = 'Log In';
      link = "Don't have an account?";
      location = "/signup";
    }

      return (
        <div className = 'authbox'>
          <ul>
            {errors}
          </ul>
          <h3>{header}</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Username:
              <input
                type="text"
                onChange={this.handleChange('username')}
                placeholder="Username">
              </input>
            </label>
            <br></br>
            <label>Password:
              <input
                type="password"
                onChange={this.handleChange('password')}
                placeholder="Password">
              </input>
            </label>
            <br></br>
            <button>{header}</button>
          </form>
          <br></br>
          <Link to={location}>{link}</Link>
        </div>
      );
  }

}
