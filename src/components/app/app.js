import React, { Component } from 'react'
import AppHeader from '../../components/app-header'
import CardCharacter from '../card-character'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from '../errorMessage'
import PageCharacter from '../page-character'
import ItemList from '../item-list'
import CharDetails from '../char-details'
import gotService from '../../services/fetch-service'

export default class App extends Component {

  gotService = new gotService()

  state = {
    isShow: true,
    selectedChar: null,
    error: false
  }  

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onToggleChar = () => {
    this.setState((state) => {
      return {
        isShow: !state.isShow
      }
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const {isShow} = this.state
    const onToggle = this.onToggleChar
    const content = isShow ? <CardCharacter/> : null
    const btnCaption = isShow ? `Hide character's card` : `Show character's card`

    return (
      <>
        <div className='container'>
          <AppHeader/>
          {content}
          <Button onClick={onToggle} style={{margin: '20px'}} color='primary'>{btnCaption}</Button>
          <PageCharacter/>
          <div style={{marginBottom: '10px'}} className='container'>
            <div className='row'>
              <div className='col'>
                <ItemList 
                  onItemSelected={this.onItemSelected}
                  getData={this.gotService.getAllBooks}
                  renderItem={({name, publisher}) => `${name} (${publisher})`}/>
              </div>
              <div className='col'>
                <CharDetails charId={this.state.selectedChar}/>
              </div>
            </div>
          </div>
          <div style={{marginBottom: '10px'}} className='container'>
            <div className='row'>
              <div className='col'>
                <ItemList 
                  onItemSelected={this.onItemSelected}
                  getData={this.gotService.getAllHouses}
                  renderItem={({name, region}) => `${name} (${region})`}/>
              </div>
              <div className='col'>
                <CharDetails charId={this.state.selectedChar}/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}