import React, { Component } from 'react'
import AppHeader from '../../components/app-header'
import CardCharacter from '../card-character'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from '../errorMessage'
import PageCharacter from '../page-character'
import PageHouse from '../page-house'

export default class App extends Component {

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
          <PageHouse/>
        </div>
      </>
    )
  }
}