import React, {Component} from 'react'
import gotService from '../../../services/fetch-service'
import ItemDetails, {Field} from '../../../components/item-details'

export default class PageHouseItem extends Component {
  
  gotService = new gotService()  

  render() {
    return (
      <ItemDetails 
        itemId={this.props.houseId}
        getData={this.gotService.getHouse}>
          <Field field='name' label='Name'/>
          <Field field='region' label='Region'/>
          <Field field='words' label='Words'/>
          <Field field='titles' label='Titles'/>
          <Field field='overlord' label='Overlord'/>
          <Field field='ancestralWeapons' label='Ancestral Weapons'/>
      </ItemDetails>
    )
  }
}

