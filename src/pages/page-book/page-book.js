import React, { Component } from 'react'
import ItemList from '../../components/item-list'
import ErrorMessage from '../../components/errorMessage'
import gotService from '../../services/fetch-service'
import {withRouter} from 'react-router-dom'

class PageBook extends Component {

  gotService = new gotService()

  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage />
    }

    return (
      <ItemList
        onItemSelected={itemId => {
          this.props.history.push(itemId)
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({ name, publisher }) => `${name} (${publisher})`} />
    )
  }
}

export default withRouter(PageBook)