import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import Scraf from './Scraves.js';
import Product from './Sales.js';
import Faq from './Faq.js';
import Contact from './Contact.js';
import Cart from './Cart.js';
import Nav from './Navigation.js';
import './index.css';
import {Router, Route, browserHistory , IndexRoute} from 'react-router';


var App = React.createClass({
  render: function() {
    return (
      <div id='main'>
        <div id='mainImage'>
           <h1>Scarves & Wraps</h1>
           <img src='https://static.wixstatic.com/media/1f3c0f_9dc405c8acfb4aaaa718f622f2dcaed5.png/v1/fill/w_163,h_47,al_c,usm_0.66_1.00_0.01/1f3c0f_9dc405c8acfb4aaaa718f622f2dcaed5.png' />
        </div>
        <br/>
        <br/>
        	  
        <Nav />
      	{this.props.children}
      </div>
    )
  }
})
var NotFound = React.createClass({
	render: function(){
		return <h1>File not Found</h1>
	}
})

ReactDOM.render((
  <Router history={browserHistory}>
  	  <Route path='/' component={App}>
        <IndexRoute path='/home' component={Home}/>
  	    <Route path='/scraves' component={Scraf} />
  	    <Route path='/sales' component={Product} />
  	    <Route path='/faq' component={Faq} />
  	    <Route path='/contact' component={Contact} />
  	    <Route path='/cart' component={Cart} />
  	    <Route path='*' component={NotFound} /> 
  	   </Route>


  </Router>),
  document.getElementById('root')
);
