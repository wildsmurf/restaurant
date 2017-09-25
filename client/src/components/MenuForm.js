import React, { Component } from 'react';
import axios from 'axios';

class MenuForm extends Component {
  state = { name: this.props.menu.item, description: this.props.menu.description,
            price: this.props.menu.price }

  handleSubmit = (e) => {
    e.preventDefault();
    const { item, description, price } = this.state;
    const { menu } = this.props;

    if(Object.keys(menu).length) {
      axios.put(menu.url, { menu: { item, description, price } })
        .then( res => {
          this.props.cancelAction();
        })
        .catch( res => {
          // TODO: handle client side errors better
          console.log('error updating menu');
        });
      } else {
        axios.post(`/api/menus.json`, { menu: { item, description, price }})
          .then( res => {
            // res.data = new product in our database
            this.setState({ item: '', description: '', price: '' });
            this.props.addMenu(res.data);
          })
          .catch( res => {
            console.log('error creating menu')
          });
      }
  }

  setValue = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { item, description, price } = this.state;
    const { cancelAction } = this.props;

    return(
      <form onSubmit={this.handleSubmit}>
        <label>Item</label>
        <input
          value={item}
          onChange={this.setValue}
          id='item'
          required
          placeholder='Menu Item'
          autoFocus
        />
        <br />
        <label>Description</label>
        <textarea
          value={description}
          onChange={this.setValue}
          id='description'
          required
          placeholder='Menu Item Description'
        />
        <br />
        <label>Price</label>
        <input value={price} onChange={this.setValue} id='price' type='number' required />
        <br />
        { cancelAction && <button type='button' onClick={cancelAction}>Cancel</button> }
        <input type='submit' />
      </form>
    )
  }
}

export default MenuForm;
