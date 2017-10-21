import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import News from './news';
import Contact from './contact';
import About from './about';

export default class ReactRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/news">news</Link></li>
              <li><Link to="/contact">contact</Link></li>
              <li><Link to="/about">about</Link></li>
          </ul>
          <Route exact path="/" component={Home}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about/:categoryName" component={About}></Route>
        </div>
      </Router>
    )
  }
}
