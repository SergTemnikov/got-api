import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from '../item-list'
import CharDetails from '../char-details'
import ErrorMessage from '../errorMessage'
import gotService from '../../services/fetch-service'
import RowBlock from '../row-block'

export default class PageCharacter extends Component {

  gotService = new gotService()

  state = {
    selectedChar: null,
    error: false
  }

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id
    })
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
    
    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => `${name} (${gender})`}/>
    )

    const charDetails = (
      <CharDetails charId={this.state.selectedChar}/>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}