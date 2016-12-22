import  React from 'react';
import data from './data.js';
import 'bootstrap/dist/css/bootstrap.css';

var Scraf = React.createClass({
	getInitialState: function(){
		return({scraf1: [] , scraf2: [] })
	},
	componentDidMount: function(){
		var k = data.getProduct()
	    this.setState({scraf1: k.scraf1 , scraf2: k.scraf2})
		
	},
	addToCart: function(arrNAme, key){
		

		if (arrNAme === 'scraf1'){
			var product = data.getProduct().scraf1[key];
			console.log('product added to cart' , product)
			data.addToCart(product);		
		} else if (arrNAme === 'scraf2'){
			var product = data.getProduct().scraf2[key];
			data.addToCart(product);	
		}



		console.log(data.getCart())
	},
	render: function(){
		var self = this;
		return (<div id='scraf'>
				
				<div id='heading'> <h1> Fall's Perfect Look </h1> </div>
			    <p> Scraves </p>
			   
			  <ul >
			  {this.state.scraf1.map(function(val,p){
			     return (<li key={p} className='col-sm-3'> 
			               <img  src={ val.image } height='300' width='200' alt='scraf'/>
			     	       <p> { val.name } </p>
			     	       <p> ${ val.price } </p>
                           <button onClick={()=>self.addToCart('scraf1', p)}>Add To Cart</button>
			     	    </li>
			            )
			        }
			    )}
			  <br/>
			  <br/>
			  <br/>
			  <br/>
			  {
			  	
			  	this.state.scraf2.map(function(val,p){
			    return (<li key={p} className='col-sm-3'>
 						<img src={ val.image } height='300' width='200' alt='scraf'/>
			    	    <p> { val.name } </p>
			    	    <p> ${ val.price } </p>
			    	    <button onClick={()=>self.addToCart('scraf2', p)}>Add To Cart</button>
			     	   </li>)
			 })}
			</ul>
			</div>
		)
	}
})

export default Scraf;