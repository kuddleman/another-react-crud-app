import React, { Component } from 'react';
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'
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
    const products = this.getProducts()
    this.setState( { products } )
  }

  getProducts = () => {
    return JSON.parse(localStorage.getItem('products'))
   
    
  }

  onDelete = name => {
    const products = this.getProducts()
    const filteredProducts = products.filter( product => {
      return product.name !== name
    } )

    this.setState({
      products: filteredProducts
    })
  }

  onAdd = ( name, price ) => {
    //console.log( `name is: ${name}, price is: ${price}` )
    const products = this.getProducts()
    products.push({
      name,
      price
    })
    this.setState({ products })
  }

  onEditSubmit = ( name, price, originalName ) => {
    let products = this.getProducts()
    products = products.map( product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price
      }
      return product
    } )

    this.setState({ products })
    
  }



  render() {
    return (
      <div className="App">
        <AddProduct onAdd={ this.onAdd } />
        <h1>Products Manager</h1>
        {
          this.state.products.map( product => {
              return (
               <ProductItem
                 key={ product.id }
                //  name={ product.name } 
                //  price={ product.price }
                { ...product }
                onDelete={ this.onDelete }
                onEditSubmit={ this.onEditSubmit }
               />
              )
          } )
        }
      </div>
    );
  }
}

export default App;
