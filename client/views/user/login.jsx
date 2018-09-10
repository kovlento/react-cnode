import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

import UserWrapper from './user'
import loginStyles from './styles/login-style'

@inject((stores) => {
  return {
  appState: stores.appState,
  user: stores.appState.user,
  }
  }) @observer
class UserLogin extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      accesstoken: '',
      helpText: '',
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentWillMount() {
    if (this.props.user.isLogin) {
      this.context.router.history.replace('/user/info')
    }
  }

  handleInput(e) {
    this.setState({
      accessToken: e.target.value.trim(),
    })
  }

  handleLogin() {
    if (this.state.accesstoken) {
      return this.setState({
        helpText: '必须填写',
      })
    }
    this.setState({
      helpText: '',
    })
    return this.props.appState.login(this.state.accesstoken)
      .then(() => {
        this.context.router.history.replace('/user/info')
      })
      .catch((err) => {
        console.log(err) //eslint-disable-line
      })
  }

  render() {
    const { classes } = this.props
    return (
      <UserWrapper>
        <div className={classes.root}>
          <TextField
            label="请输入Cnode AccessToken"
            placeholder="请输入Cnode AccessToken"
            required
            helperText={this.state.helpText}
            value={this.state.accessToken}
            onChange={this.handleInput}
            className={classes.input}
          />
          <Button 
            raised
            color="accent"
            onClick={this.handleLogin}
            className={classes.loginButton}
          >
            登录
          </Button>
        </div>
      </UserWrapper>
    )
  }
}

UserLogin.propTypes = {
  classes: PropTypes.object.isRequired,
}

UserLogin.wrappedComponent.propTypes = {
  appState: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default withStyles(loginStyles)(UserLogin)
