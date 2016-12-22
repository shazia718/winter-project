import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

var Nav = React.createClass({
	render: function(){
		return(<div id='navigation'>
			
				<button > <Link to='/'> Home </Link></button>
				<button> <Link to='/scraves'> Scraves </Link></button>
				<button> <Link to='/sales'> Sales </Link></button>
				<button> <Link to='/faq'> FAQ </Link></button>
				<button> <Link to='/contact'> Contact Us</Link></button>
				<button> <Link to='/cart' > Cart </Link></button>
			</div>
			)
	}
})
 export default Nav;