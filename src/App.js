import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['salman' , 'Amir' , 'ranveer']
  const Products = [{name: 'bags', price: '$99.99'},
  {name: 'illustrator', price: '$69.99'},{name: 'toys', price: '$29.99'}]
 const friends = [{name : 'akash',age: '24'},{name : 'Dhurbo',age: '25'}]
  var song = {name: "mahfuz", job: "singer"}
  var style = {
    color:'green',
    backgroundColor: 'pink'
  }
  const productName = Products.map(product => product.name);//maps the products name in the Products variable
  const nayokName = nayoks.map(nayok => nayok);
  console.log(nayokName)
  console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 style = {style}>my heading </h1>
        <p>{2+5-9}</p>
        <p>naeem</p>
        <p>my first one</p>
        <Person name = 'rubel'></Person>
        <Person name = 'manoby' food = 'dumplings' work = 'sleep'></Person>
        <Person></Person>
        <Product name = {Products[0].name}></Product>
        <Product name = {Products[1].name}></Product>
        
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>) //mapping over every elements of nayoks
          }
          {
            Products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
            Products.map(product => <Product product = {product}></Product>)
        }
        {
          friends.map(friend => <Friend friend = {friend.name}></Friend>)
        }
        <li>{nayoks[0]}</li>
        
        
        
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height : '250px',
    float: 'left',
    marginTop: '25px'
  }
  return(
    <div style={productStyle}>
      <h2>Name: {props.name} </h2>
      <h1>{props.name}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){ //must be upper case namee
  return ( //if returning two elements must be closed in a div tag as it can only return single element
    <div style={{border : '2px solid red'}}>
      <h1> Name: {props.name} food: {props.food}</h1>
      <h3>Work : {props.work}.</h3>
     
    </div>
  )
}
function Friend(props){
  const friendStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height : '250px',
    float: 'left',
    marginTop: '25px'
  }
  return (<div style = {friendStyle}>
    <h5>name: {props.name}</h5>
  <h6>age: {props.age}</h6>
  </div>
  )
}
export default App;
