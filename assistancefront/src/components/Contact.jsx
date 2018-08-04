import React,{Component} from 'react';
class Contact extends Component{
  render(){
    return(
      <div className="wrapper container jumbotron">
        <h2 classNameName ="section-title text-center"><u>Contact Me</u></h2>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form name="sentMessage" id="contactForm" novalidate>
              <div className="control-group">
                <div className="form-group  controls">
                  <label>Name</label>
                  <input type="text" className="form-control"  id="name" required data-validation-required-message="Please enter your name."></input>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group  controls">
                  <label>Email Address</label>
                  <input type="email" className="form-control"  id="email" required data-validation-required-message="Please enter your email address."></input>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12  controls">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control"  id="phone" required data-validation-required-message="Please enter your phone number."></input>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group  controls">
                  <label>Message</label>
                  <textarea rows="5" className="form-control"  required data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br/>
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div classNameName ="container-fluid" >
          <h5 classNameName="text-center"><u>My Full Address</u></h5>
          <address classNameName ="text-center">
  				<p><strong>Norrtullsgatan  48</strong></p>
  				<p><strong>826 37 Söderhamn</strong></p>
  				<p><strong>Sweden</strong></p>
  				<p><strong>Telefon, mobil: (+46)73 – 0923388</strong></p>
  				<p><strong>Email :jbatgoal@yahoo.fr</strong></p>
  				</address>
			</div>
      </div>
    );
  }

}
export default Contact;
