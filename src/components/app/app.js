import React, { Component } from 'react'
import AppHeader from '../../components/app-header'
import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AppHeader/>
        <p>
          This is content
        </p>
      </div>
    )
  }
}