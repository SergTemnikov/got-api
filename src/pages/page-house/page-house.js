import React, { Component } from 'react'
import ItemList from '../../components/item-list'
import ItemDetails, {Field} from '../../components/item-details'
import ErrorMessage from '../../components/errorMessage'
import gotService from '../../services/fetch-service'
import RowBlock from '../../components/row-block'

export default class PageHouse extends Component {

  gotService = new gotService()

  state = {
    selectedHouse: null,
    error: false
  }

  onHouseSelected = (id) => {
    this.setState({
      selectedHouse: id
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

    const houseList = (
      <ItemList 
        onItemSelected={this.onHouseSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({name, region}) => `${name} (${region})`}/>
    )

    const houseDetails = (
      <ItemDetails 
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}
        itemLabel='House'>
          <Field field='name' label='Name'/>
          <Field field='region' label='Region'/>
          <Field field='words' label='Words'/>
          <Field field='titles' label='Titles'/>
          <Field field='overlord' label='Overlord'/>
          <Field field='ancestralWeapons' label='Ancestral Weapons'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={houseList} right={houseDetails}/>
    )
  }
}