import React from 'react'
import Routes from '../config/router'

import MainAppBar from './layout/app-bar'

export default class App extends React.Component {
  componentDidMount() {
    // todo
  }

  render() {
    return [
      <MainAppBar key="mainAppBar" />,
      <Routes key="routers" />,
    ]
  }
}
