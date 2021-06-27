import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Products from './Products';
import AddProduct from './AddProduct'
import AddVersion from './AddVersion'
import User from './User'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      value: 100
    }
  }
  changeValue = () => {
    console.log(this.valueInput.value)
    this.setState({
      value: this.valueInput.value
    })
  }
  render = () => {

    return (

      <div className="App">
        <Router>
          <ul className="ulNav">
            <li>
              <Link to='/Products'>
                <p>Products</p>
              </Link>
            </li>
            <li>
              <Link to='/AddProduct'>
                <p>AddProduct</p>
              </Link>
            </li>
            <li>
              <Link to='/AddVersion'>
                <p>AddVersion</p>
              </Link>
            </li>
            <li>
              <Link to='/User'>
                <p>User</p>
              </Link>
            </li>
          </ul>

          <Route exact path="/Products">
            <Products></Products>
          </Route>
          <Route exact path="/AddProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/AddVersion">
            <AddVersion></AddVersion>
          </Route>
          <Route exact path="/User">
            <User></User>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
