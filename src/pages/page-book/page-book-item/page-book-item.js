import React, {Component} from 'react'
import gotService from '../../../services/fetch-service'
import ItemDetails, {Field} from '../../../components/item-details'

export default class PageBookItem extends Component {
  
  gotService = new gotService()

  render() {
    return (
      <ItemDetails
        itemId={this.props.bookId}
        getData={this.gotService.getBook}>
        <Field field='name' label='Name' />
        <Field field='numberOfPages' label='Number of pages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    )
  }
}


