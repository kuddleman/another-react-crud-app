import React, { Component } from 'react';

import './App.css';

const products = [
  {
    id: 1,
    name: 'iPad',
    price: 200
  },
  {
    id: 2,
    name: 'iPhone',
    price: 650
  }
]

localStorage.setItem('products', JSON.stringify(products))

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        products: []
      }
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    const products = JSON.parse(localStorage.getItem('products'))
    console.log('Here are the products:', products)
    this.setState( { products } )
  }



  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {
          this.state.products.map( product => {
              return (
                <div key={ product.id }>
                  <span>{ product.name }</span>
                   {` \ `}
                   <span>{ product.price }</span>
                   {` | `}
                </div>
              )
          } )
        }
      </div>
    );
  }
}

export default App;
