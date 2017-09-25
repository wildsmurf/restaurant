/*eslint no-restricted-globals: ["warn", "event", "fdescribe"]*/

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuForm from './MenuForm'

class Menu extends React.Component {
  state = { menu: {} }

  fetchMenu = () => {
    axios.get(`/api/menus/${this.props.match.params.id}.json`)
      .then( res => this.setState({ menu: res.data }) )
  }

  componentDidMount() {
    this.fetchMenu()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.menu === this.state.menu)
    this.fetchMenu()
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  deleteMenu = () => {
    if(confirm('Are you sure?')) {
      axios.delete(this.state.menu.url)
        .then( res => {
          this.props.history.push('/home')
        })
        .catch( res => {
          //TODO: handle some error stuff
          console.log('error deleting menu')
        })
    }
  }

  render() {
    let { editing, menu: {item, description, price} } = this.state;

    if(editing) {
      return(
        <MenuForm
          menu={this.state.menu}
          cancelAction={this.toggleEdit}
        />
      )
    } else {
      return(
        <div>
          <h1>{item}</h1>
          <h3>{description}</h3>
          <h3>${price}</h3>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.deleteMenu}>Delete</button>
        </div>
      )
    }
  }
}

export default Menu;
