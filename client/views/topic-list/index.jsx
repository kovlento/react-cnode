import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Tabs, { Tab } from 'material-ui/Tabs'
import Button from 'material-ui/Button'
import { AppState } from '../../store/app-state'
import Container from '../layout/container'
import TopicListItem from './list-item'

@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
    }
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
  }

  componentDidMount() {
    // todo
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeTab(e, index) {
    this.setState({
      tabIndex: index,
    })
  }

  /** eslint-disable */
  listItemClick() {

  }
  /** eslint-enable */

  render() {
    const {
      tabIndex,
    } = this.state

    const topic = {
      title: 'this is a title',
      username: 'kovlento',
      reply_count: 20,
      visit_count: 100,
      create_at: '2018-8-8',
      tab: '置顶',
    }

    return (
      <Container>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        <Tabs value={tabIndex} onChange={this.changeTab} >
          <Tab label="全部" />
          <Tab label="分享" />
          <Tab label="工作" />
          <Tab label="问答" />
          <Tab label="精品" />
          <Tab label="测试" />
        </Tabs>
        <TopicListItem onClick={this.listItemClick} topic={topic} />
      </Container>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
