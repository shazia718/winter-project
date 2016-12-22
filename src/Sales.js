import React from 'react';
import data from './data.js'

var Product = React.createClass({
	
		getInitialState: function(){
		return({scraf1: [] })
	},
	componentDidMount: function(){
		var k = data.getProduct()
        this.setState({scraf1: k.scraf1 })
	}
	,
	render: function(){
		var items = this.state.scraf1.map(function(val,p){
			return(<li key={p} className='col-sm-3'>
				<img  src={ val.image } height='300' width='200' alt='scraf'/>
			     	     <p>  {val.name} </p>
			     	      <p> {val.price} </p>
			    </li> 	       
			)
		})
		console.log(items)
		return (
			    <div id='sale'>
				
				  <div id='sale1'> <h1>Holiday Sale 10% Off </h1> </div>
			    <h2 text-align='center'> Sale</h2>
			    <ul>
		         {items}
		        </ul>
		       </div>)

		{/*return (
			    <div id='sale'>
				
				  <div id='sale1'> <h1>Holiday Sale 10% Off </h1> </div>
			    <h2 text-align='center'> Sale</h2>
			   
			   	{this.state.scraf1.map(function(val,p){
			     return (<li key={p}> 
			               <img  src={ val.image } height='300' width='200' alt='scraf'/>
			     	       {val.name} 
			     	     
			     	     </li>
			            )
			        }
			    )}
			   
		
				</div>) */}
	}
}) 

export default Product;