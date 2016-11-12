import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, History, IndexRoute } from 'react-router'


import NotFound from './ui/404'
//import HelloWorld from './ui/hello-world'


/**
 * Home page
 */

class HomePage extends React.Component {
  render() {
    return (
      <h2>Home page yo</h2>
    )
  }
}


class HelloWorld extends React.Component {
  render() {
    return (
      <h2>Hello there</h2>
    )
  }
}


/**
 * Render the app
 */

render((
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/hello" component={HelloWorld} />
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('App'))

