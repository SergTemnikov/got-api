import React, { Component } from 'react'
import ItemList from '../item-list'
import HouseDetails from '../house-details'
import gotService from '../../services/fetch-service'

export default class PageHouse extends Component {

  state = {
    selectedHouse: null,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onHouseSelected = (id) => {
    this.setState({
      selectedHouse: id
    })
  }


  gotService = new gotService()

  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <ItemList 
                onHouseSelected={this.onHouseSelected}
                getData={this.gotService.getAllHouses}/>
            </div>
            <div className='col'>
              <HouseDetails charId={this.state.selectedHouse}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}