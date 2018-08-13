import React, { Component } from 'react';
import{BrowserRouter} from "react-router-dom";
class MyCv extends Component {
  render() {
    return (
    	
    	<div className ="container-fluid" id="mycv">
    	    <h3 className ="page-header text-center">My CV</h3>
    	    <div>
    	     
	        </div>
            <div className ="row" >
              <address>
				<p><strong>Jean Baptiste Kadahizi Ndagijimana</strong></p>
				<p><strong>Norrtullsgatan  48</strong></p>
				<p><strong>826 37 Söderhamn</strong></p>
				<p><strong>Sweden</strong></p>

				<p><strong>Telefon, mobil: (+46)73 – 0923388</strong></p>
				</address>
			</div>
			<div className ="row">
			 <p>Motivated by a strong determination  to the contribution of</p>
			 <p> the optimization of the technical opportunities and </p>
			 <p>for the promotion of the technical-entrepriese,</p>
			 <p>either ,small,middle or big especially in private sector,</p>
			 <p>Having a vision to give services of good quality and competitive not only to the local level but also
			 to the international level.</p>
			</div>
            <div className ="panel-heading">
                  <h3 className ="panel-title text-center text-primary bg-warning">Education</h3>

                </div>
			<div className ="panel panel-primary">
               <table className =" table table-bordered table-hover table-condensed table-striped bg-default">
                
                <thead>
                  <tr className="text-danger">
	                  <td><h1>Education</h1></td>
	                  <td><h1>year</h1></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full stack developer(web developer) Openclassrooms(Frankrike)</td>
                    <td>2017-2018</td>

                  </tr>
                  <tr>
                    <td><p>Electronics och Telecomunication , (Tumba college of Technology):</p>
                    

                    </td>
                    <td>
                     aug 2009 – jun 2011
                    </td>

                  </tr>
                  <tr>
                    <td>
                    <p>Mathematics-Physics in Secondary school(IFAK)</p></td>
                    <td>aug 2003 – jun 2009</td>

                  </tr>
                  <tr>
                    <td>Certificate in  cabin crew Training Program from INFLIGHT INSTITUTE(CANADA)</td>
                    <td>2015-2016</td>

                  </tr>
                </tbody>

               </table>
			</div>

			<div className ="panel-heading ">
                  <h3 className ="panel-title text-center text-primary bg-warning">Working Experiences</h3>
                </div>
                <div className ="panel panel-primary">
               <table className =" table table-bordered table-hover table-condensed table-striped bg-default">
                
                <thead>
                  <tr className="text-danger">
	                  <td><h1>Job Title</h1></td>
	                  <td><h1>Company</h1></td>
	                  <td><h1>Job Description</h1></td>
	                  <td><h1>year</h1></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Constructor</td>
                    <td>Orsambay AB,Söderhamn</td>
                    <td>construction</td>
                    <td>2015-2017</td>

                  </tr>
                  <tr>
                    <td>Translator</td>
                    <td>Unted Nations Kongo,Goma</td>
                    <td>Translator  Goma(parttime)</td>
                    <td>2012-2013</td>
                  </tr>
                  <tr>
                    <td><p>Airtel customer services</p></td>
                    <td><p>AIRTEL, Kigali</p></td>
                    <td>
                    Customer Care
                    </td>
                    <td>aug 2011 – jun 2012</td>

                  </tr>
                  <tr>
                    <td>IT Support</td>
                    <td>COFTA;KIGALI_RWANDA</td>
                    <td>IT support assistant in  Afrika(COFTA). 
                    </td>
                    <td>2010-2011</td>

                  </tr>
                </tbody>

               </table>
			</div>
            <div className ="panel-heading ">
                  <h3 className ="panel-title text-center text-primary bg-warning">Computer Skills</h3>
                </div>
			<div className ="panel-primary">
			<table className="table table-bordered table-hover table-condensed" id ="film">
			<tr>
			<td><p>Microsoft word</p></td>
			<td><p>Microsoft excel</p></td>
			<td><p>Microsoft Access</p></td>
			<td><p>Power Point</p></td>
			<td><p>CISCO Certificates of IT essentials(PC hardware and software maintenance</p></td>
			<td><p>CISCO Certificate of CCNA networking academy</p></td>
			<td><p>Oracle Database(OCA)</p></td>
			<td><p>MySQL Language</p></td>
			<td><p>Full Stack Developer paths(web developer bachelor degree) from Openclassrooms(France)</p></td>

			</tr>
			</table>
			</div>

			<div className ="panel-heading ">
                  <h3 className ="panel-title text-center text-primary bg-warning">Languages</h3>
                </div>
			<div className ="panel-primary">
			<table className="table table-bordered table-hover table-condensed" id ="film">
			  <tr>
			  <th>Language Name</th>
			  <th>Speaking Level</th>
			  </tr>
			<tr>
			<td><p>French</p></td>
			<td><p>Excellent</p></td>
			</tr>
			<tr>
			<td><p>English</p></td>
			<td><p>Very Good</p></td>
			</tr>
			<tr>
			<td><p>Swahili </p></td>
			<td><p>Good</p></td>
			</tr>
			<tr>
			<td><p>swedish></p></td>
			<td><p>Good</p></td>

			</tr>
			</table>
			</div>

			<div className ="panel-heading  text-center">
                  <h3 className ="panel-title text-center text-primary bg-warning">References</h3>
                </div>
			<div className ="panel-primary">
			<table className="table table-bordered table-hover table-condensed" id ="film">
			  <tr>
			  <th>Name</th>
			  <th>Company</th>
			  <th>Contact</th>
			  </tr>
			<tr>
			<td><p>Samuel Andersson</p></td>
			<td><p>ORSAMBAY AB</p></td>
			<td><p>+46703337474</p></td>
			</tr>
			<tr>
			<td><p>Tommy Winsjansen</p></td>
			<td><p>ENJO_SWEDEN</p></td>
			<td><p>+46706605304</p></td>
			</tr>
			<tr>
			<td><p>Sture Johnson</p></td>
			<td><p>ERikshjälpen Söderhamn</p></td>
			<td><p>+46706754013</p></td>
			</tr>
			<tr>
			<td><p>Elisabeth Winsjansen></p></td>
			<td><p>Bollnäs Aleris Hospital</p></td>
			<td><p>+46707663509</p></td>

			</tr>
			</table>
			</div>

        </div>

    );
  }
}

export default MyCv;	