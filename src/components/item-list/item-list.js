import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from '../spinner'
import { Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap'
import PropTypes from 'prop-types'
import gotService from '../../services/fetch-service'

class ItemList extends Component {

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

    const {data} = this.props

    const items = this.renderItems(data)
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
}

ItemList.defaulProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func
}

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    }
  
    componentDidMount() {
      getData()
       .then(data => {
        this.setState({data})
       })
    }

    render() {
        const {data} = this.state

        if (!data) {
          return <Spinner/>
        }
          return <View {...this.props} data={data}/>
        }
  }
}

const {getAllCharacters} = new gotService()
export default withData(ItemList, getAllCharacters)