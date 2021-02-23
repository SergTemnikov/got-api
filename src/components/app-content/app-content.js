import React, { Component } from 'react'
import CardCharacter from '../card-character'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class AppContent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <CardCharacter/>
    )
  }
}
