import React from 'react';

var Contact = React.createClass({
	render: function(){
		return (<div id='contact'>

			      <h2>  Contact Us </h2>
			      <br/>
			      <p>26 Graves Street Staten Island,NY 10314</p>
			      <p>Contact # 718-838-0370</p>
			      <form id='form1' >
			        Name:    <input type='text' /><br/>
			        Email:   <input type='text'/><br/>
			        Subject: <input type='text' /><br/>
			        Message: <textarea /><br/><br/>
			        <input type='submit' value='Submit'/>
			      </form>
			    </div>
			    )
	}
})

export default Contact;