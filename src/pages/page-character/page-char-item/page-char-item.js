import React, {Component} from 'react'
import gotService from '../../../services/fetch-service'
import ItemDetails, {Field} from '../../../components/item-details'

export default class PageCharItem extends Component {

  gotService = new gotService()

  render() {
    return (
      <ItemDetails 
        itemId={this.props.charId}
        getData={this.gotService.getCharacter}>
          <Field field='gender' label='Gender'/>
          <Field field='born' label='Born'/>
          <Field field='died' label='Died'/>
          <Field field='culture' label='Culture'/>
      </ItemDetails>
    )
  }
}