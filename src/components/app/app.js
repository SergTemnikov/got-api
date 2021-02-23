import React, { Component } from 'react'
import AppHeader from '../../components/app-header'
import AppContent from '../app-content'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container'>
        <AppHeader/>
        <AppContent/>
      </div>
    )
  }
}