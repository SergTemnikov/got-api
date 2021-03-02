import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap'
import PropTypes from 'prop-types'

const Itemlist = (props) => {

  function renderItems(arr) {
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

  const {data} = this.props
  const items = renderItems(data)
  return (
    <div className='row'>
      <div className='col'>
        <Card style={{borderColor: '#333'}}>
          <CardBody>
            <ListGroup>
              {items}
            </ListGroup>
          </CardBody>
        </Card>
      </div>
    </div>
  ) 
}

ItemList.defaulProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func
}

export default ItemList
