import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from '../spinner'
import { Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap'

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const {getData} = this.props
    getData()
     .then(itemList => {
      this.setState({itemList})
     })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const label = this.props.renderItem(item)
      const {id} = item
      return (
        <ListGroupItem 
          key={id}
          onClick={() => this.props.onItemSelected(id)}
          style={{cursor: 'pointer'}}>
          {label}
        </ListGroupItem>
      )
    })
  }

  render() {

    const {itemList} = this.state
    const {itemLabel} = this.props

    if (!itemList) {
      return <Spinner/>
    }

    const items = this.renderItems(itemList)
    return (
      <div className='row'>
        <div className='col'>
          <Card style={{borderColor: '#333'}}>
            <CardBody>
              <h4 className='row justify-content-md-center'>  Please, select a {itemLabel}</h4>
              <ListGroup>
                {items}
              </ListGroup>
            </CardBody>
          </Card>
        </div>
      </div>
    ) 
  }
}