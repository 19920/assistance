import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <div className="callout primary">
        <article className=" row grid-container">
          <div className="column-8">
            <h1>{this.props.name}</h1>
            </div>
        </article>
  </div>

    );
  }
}

export default Header;
