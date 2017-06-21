'use strict'
import React from 'react'
import {Router, Route, Link, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import Landing from './components/Landing'
import NotFound from './components/NotFound'
import SignupContainer from './containers/SignupContainer'
import EditorContainer from './containers/EditorContainer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                Menu <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
                <i className="fa fa-play-circle"></i> <span className="light">Start</span> SmartDocs
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                  <a href="#page-top"></a>
              </li>
              <li>
                  <Link to='/about' className="page-scroll">About</Link>
              </li>
              {user ? <WhoAmI/>
              : <span>
                  <li>
                    <Link to='/login' className="page-scroll">Login</Link>
                  </li>
                  <li>
                      <Link to='/signup' className="page-scroll">Sign Up</Link>
                  </li>
                </span>
              }
                <li>
                    <Link to='/contact' className="page-scroll">Contact</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/landing" />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignupContainer} />
        <Route path="/landing" component={Landing} />
        <Route path="/editor" component={EditorContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
