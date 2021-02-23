import React, { Component } from 'react'
import './app-content.css'

export default class AppContent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='content'>
        <h3>This is Content</h3>
      </div>
    )
  }
}
