import { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className='menu'>
        <h1>BookBarn</h1>
        <h3>Home</h3>
        <h3>My Books</h3>
        <h3>Browse</h3>
        <h3>Community</h3>
        <h6>Sign In</h6>
        <h6>Sign Out</h6>
      </div>

    )
  }
}

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h4>© 2021 BookBarn, Inc.</h4>
        <h4>Privacy</h4>
        <h4>Terms and Conditions</h4>
      </div>
    )
  }
}