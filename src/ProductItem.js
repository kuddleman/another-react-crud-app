import React, { Component } from 'react'
import { getDefaultNormalizer } from '@testing-library/react'


class ProductItem extends Component {

  state = {
    isEdit: false
  }

  onDelete = () => {
    //this.props.onDelete( this.props.name )
    // the above destructured:

    const { onDelete, name } = this.props
    onDelete( name )
  }

  onEdit = () => {
    this.setState({ isEdit: true })
  }

  onEditSubmit = e => {
    e.preventDefault()
    this.props.onEditSubmit( this.nameInput.value, 
                             this.priceInput.value,
                             this.props.name  
                            )

    this.setState({ isEdit: false })

  }

  render() {
    const { name, price } = this.props
    return(

      <div>
      {
        this.state.isEdit
        ? (
          <form onSubmit={ this.onEditSubmit }>
            <input type="text" 
                placeholder="Name" 
                defaultValue={name}
                ref={nameInput => this.nameInput = nameInput}
            />
            <input type="text" 
                  placeholder="Price"
                  ref={priceInput => this.priceInput = priceInput}
                  defaultValue={price}
            />
            <button>Save</button>
          </form>
        )
        :
        (
          <div>
            <span>{ name }</span>
            {` | `}
            <span>{ price }</span>
            {` | `}
            <button onClick={ this.onEdit }>EDIT</button>
            {`|`}
            <button onClick={ this.onDelete }>DELETE</button>
          </div>
        )
      }
      
    </div>

    )
  }
}

export default ProductItem