import React, { Component } from 'react'
import ItemList from '../../components/item-list'
import ErrorMessage from '../../components/errorMessage'
import gotService from '../../services/fetch-service'
import {withRouter} from 'react-router-dom'

class PageHouse extends Component {

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
      return <ErrorMessage/>
    }

    return (
      <ItemList 
        onItemSelected={itemId => {
          this.props.history.push(itemId)
        }}
        getData={this.gotService.getAllHouses}
        renderItem={({name, region}) => `${name} (${region})`}/>
    )
  }
}

export default withRouter(PageHouse)