import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Menulist from './Menu';
import axios from 'axios';
import MenuForm from './MenuForm';

class Home extends React.Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ menus: res.data }) )
  }

  render() {
    return(
      <div>
        <MenuForm menu={{}} addMenu={this.addMenu} />
        <h1>Please Browse all our Delicious Pokemon</h1>
        <Menulist allmenus={this.state.menus} />
        <h6>I don't understand this</h6>
      </div>
    )
  }
}


export default Home;
