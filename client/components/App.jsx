import React, {Component, Fragment} from 'react'

import Nav from './Nav'
import Sine from './Sine'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home'
    }
  }

  showPage = (page) => {
    switch (page) {
      case 'sine':
        return <Sine />
      default:
        return <h1>React development has begun!</h1>
    }
  }

  changePage = (page) => {
    this.setState({page})
  }

  render() {
    return (
      <Fragment>
        <Nav changePage={this.changePage} />
        {this.showPage(this.state.page)}
      </Fragment>
    )
  }
}

export default App
