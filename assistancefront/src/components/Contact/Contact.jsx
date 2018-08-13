import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="callout primary">
            <div className="grid-container">
              <h3>Contact Me</h3>
              <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.</p>
              <ul className="menu">
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Yo</a></li>
              </ul>
            </div>
            <div className="medium-6 cell">
              <label>Name
                <input type="text" placeholder="Name"/>
              </label>
              <label>Email
                <input type="text" placeholder="Email"/>
              </label>
              <label>
                Message
                <textarea placeholder="holla at a designer"></textarea>
              </label>
              <input type="submit" className="button expanded" value="Submit"/>
            </div>
          </div>

    );
  }
}

export default Contact;
