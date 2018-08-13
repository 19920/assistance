import React, { Component } from 'react';
import './Welcome.css';


class Welcome extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-8 large-up-8">
       <div className="">
       <p>Welcome to our community !just Login or Sign up in order to give or get help</p>
       <a href="/login" class="button primary">Login</a>
       <a href="/register" class="button primary">Sign Up</a>

       </div>
  </div>

    );
  }
}

export default Welcome;
