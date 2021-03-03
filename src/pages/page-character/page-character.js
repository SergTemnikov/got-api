import React, { Component } from 'react'
import ItemList from '../../components/item-list'
import ErrorMessage from '../../components/errorMessage'
import gotService from '../../services/fetch-service'
import {withRouter} from 'react-router-dom'

class PageCharacter extends Component {

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
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => `${name} (${gender})`}/>
    )
  }
}

export default withRouter(PageCharacter)