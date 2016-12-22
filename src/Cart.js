import React from 'react';
import data from './data.js';


var Cart = React.createClass({
	getInitialState: function(){
		return({cart:[]})
	},
	componentDidMount: function(){
		var store = data.getCart()
		console.log('inside the shopping cart:   '+ store)

	},
	render: function(){
		return(<div>
			  <h1> Sorry Shopping Cart </h1>
			  <h2> Under Construction </h2>

		</div>)
	}

})

export default Cart;