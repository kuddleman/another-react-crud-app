import React, { Component } from 'react'

class AddProduct extends Component {

  onSubmit = (e) => {
     // need to prevent page from refreshing:
     e.preventDefault()
     //get the values submited 
     this.props.onAdd(this.nameInput.value, this.priceInput.value)
     this.nameInput.value = ''
     this.priceInput.value = ''
 
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Product</h3>
        <input type="text" 
               placeholder="Name" 
               ref={nameInput => this.nameInput = nameInput}

        />
        <input type="text" 
               placeholder="Price"
               ref={priceInput => this.priceInput = priceInput}
        />
        <button>Add</button>
        <hr />
      </form>
    )
  }
}

export default AddProduct