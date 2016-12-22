let data = {
  about: {
    store_name: 'Scraf',
    store_slogan: "Welcome to Scraf & Wraps",
    store_address: '26 Graves Street, New York, NY',
    store_email: 'add@gmail.com',
    store_phone: '555-555-0000'
  },
  products: {
    scraf1: [{name:'Scraf-1',   price: 1.99, image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTqDhj5--mpHTnfSrc7Y57bzhwVZUNU8RphZC9bT6pKaeG-OhznI8tG2g' }, 
               {name:'Scraf-2', price: 2.99, image: 'https://s-media-cache-ak0.pinimg.com/564x/b2/d0/f7/b2d0f75392b58b82b0ed1dced80e3a22.jpg'},
               {name:'Scraf-3', price: 3.99, image: 'http://www.fiddlesticksknitting.com/assets/photos/wavy_lace_scarves/wavy_bee_scarf.jpg'},
               {name:'Scraf-4', price: 4.99, image: 'https://s-media-cache-ak0.pinimg.com/236x/29/7c/e5/297ce5ab67248260ee2b723b1065ba7f.jpg'}],

    scraf2: [{name: 'Scraf-1',  price: 1.99,  image:'https://img3.etsystatic.com/002/1/5142002/il_570xN.371441347_ehkk.jpg' }, 
               {name:'Scraf-2', price: 2.99, image: 'https://s-media-cache-ak0.pinimg.com/originals/62/6c/55/626c55476b41640883ec3ab26eef8e90.jpg'},
               {name:'Scraf-3', price: 3.99, image: 'http://s-media-cache-ak0.pinimg.com/736x/43/34/66/433466dd8f2f2434bc261dffae1870cc.jpg'},
               {name:'Scraf-4', price: 4.99, image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVrIrd9OtfN_FRtQMNEa-rUCS9DpGUPQpvgMcOAk21lly22PmnWg'}]

  },
  shopping_cart: []
};

data.getProduct = function() {
  return this.products;
};

data.getAbout = function() {
  return this.about;
};

data.getImages = function() {
  return this.images;
};

data.addToCart = function(product) {
  this.shopping_cart.push(product);
};

data.getCart = function(){
  return this.shopping_cart;
}
export default data;

  