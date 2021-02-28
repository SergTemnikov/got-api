import React, { Component } from 'react'
import ItemList from '../../components/item-list'
import ItemDetails, {Field} from '../../components/item-details'
import ErrorMessage from '../../components/errorMessage'
import gotService from '../../services/fetch-service'
import RowBlock from '../../components/row-block'

export default class PageCharacter extends Component {

  gotService = new gotService()

  state = {
    selectedItem: null,
    error: false
  }

  onCharSelected = (id) => {
    this.setState({
      selectedItem: id
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
    
    const charList = (
      <ItemList 
        onItemSelected={this.onCharSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => `${name} (${gender})`}/>
    )

    const charDetails = (
      <ItemDetails 
        itemId={this.state.selectedItem}
        getData={this.gotService.getCharacter}
        itemLabel='Character'>
          <Field field='gender' label='Gender'/>
          <Field field='born' label='Born'/>
          <Field field='died' label='Died'/>
          <Field field='culture' label='Culture'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={charList} right={charDetails}/>
    )
  }
}