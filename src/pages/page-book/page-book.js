import React, { Component } from 'react'
import ItemList from '../../components/item-list'
import ItemDetails, { Field } from '../../components/item-details'
import ErrorMessage from '../../components/errorMessage'
import gotService from '../../services/fetch-service'
import RowBlock from '../../components/row-block'


export default class PageBook extends Component {

  gotService = new gotService()

  state = {
    selectedBook: null,
    error: false
  }

  onBookSelected = (id) => {
    this.setState({
      selectedBook: id
    })
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

    const bookList = (
      <ItemList
        onItemSelected={this.onBookSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({ name, publisher }) => `${name} (${publisher})`} />
    )

    const bookDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}
        itemLabel='Book'>
        <Field field='name' label='Name' />
        <Field field='numberOfPages' label='Number of pages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    )

    return (
      <RowBlock left={bookList} right={bookDetails} />
    )
  }
}