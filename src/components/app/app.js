import React, { Component } from 'react'
import AppHeader from '../../components/app-header'
import CardCharacter from '../card-character'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from '../errorMessage'
import {PageCharacter, PageHouse, PageBook} from '../../pages'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
      <Router>
        <div className='app'>
          <div className='container'>
            <AppHeader/>
            {content}
            <Button onClick={onToggle} style={{margin: '20px'}} color='primary'>{btnCaption}</Button>
            {/* <Route path='/' component={() => <h1>Welcomt ot GoT DB</h1>}></Route> */}
            <Route path='/characters' component={PageCharacter}/>
            <Route path='/houses' component={PageHouse}/>
            <Route path='/books' component={PageBook}/>
          </div>
        </div>
      </Router>
    )
  }
}