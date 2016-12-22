import React from 'react';
import Scraf from './Scraves.js';
import Product from './Sales.js';
import './index.css';

var Home = React.createClass({
	render: function(){
	 return	(<div className='wrapper'>
	 	       <div>
	 	           <img className='image1' src='http://res.cloudinary.com/vertigo-studio-srl/image/upload/f_auto/v1451915091/tumblr_nwxbdquylJ1ugh5sto2_r1_12801_xkgvbm.jpg' />
	 	     	</div>
	 	     	<br/>
	 	     	<br/>
	 	     	<br/>
	 	     	<Product />
	 	     </div>
	 	    )

	}
})

export default Home;