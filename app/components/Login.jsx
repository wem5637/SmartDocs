import React from 'react'
import {Link} from 'react-router'

//     <input name="username" />

const Login = ({ login }) => (
  <div className="container col-xs-8 col-sm-8 col-md-6 col-lg-6 col-xs-offset-2 col-sm-offset-2 col-md-offset-3 col-lg-offset-3">
    <div className="row">
      <form onSubmit={evt => {
        evt.preventDefault()
        login(evt.target.email.value, evt.target.password.value)
      } }>
        <div className="form-group">
          <h4>Email:</h4>
          <input
            name="email"
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <h4>Password:</h4>
          <input
            name="password"
            type="password"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">Login</button>
      </form>
    </div>
    <div>
      <div className="row center sign-up-separate">
        <h4>------ OR ------</h4>
      </div>
    </div>
    <div className="row center">
      <h3>
        <a
          target="_self"
          href="/api/auth/login/google">
          <i className="fa fa-google" />
          <span>Login with Google</span>
        </a>
      </h3>
    </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)
