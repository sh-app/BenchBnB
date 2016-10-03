import React from 'react';
import { Link } from 'react-router';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  render() {

    if (this.props.currentUser) {
      //when user is logged in--
      return (
        <section>
          <h3>
            Welcome {this.props.currentUser.username}!
          </h3>
          <br></br><br></br>
          <button onClick = { this.handleClick }>Log Out</button>
        </section>
      );
    } else {
      //when no one is logged in--
      return (
        <ul>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Log in</Link></li>
        </ul>
      );
    }

  }
}
