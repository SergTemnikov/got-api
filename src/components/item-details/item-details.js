import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import gotService from '../../services/fetch-service'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './item-details.module.css'

const Field = ({item, field, label}) => {
  return (
    <li className={style.listItem}>
      <span>{label}:</span>
      <span className='text-primary'>{item[field] ? item[field] : 'no info:('}</span>
    </li>
  )
}

export {Field}

export default class ItemDetails extends Component {

  gotService = new gotService()

  state = {
    item: null
  }

  componentDidMount() {
    this.updateChar()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateChar()
    }
  }

  updateChar() {
    const { itemId, getData } = this.props
    if (!itemId) {
      return
    }
    getData(itemId)
      .then(item => {
        this.setState({ item })
      })
  }

  render() {

    const {itemLabel} = this.props

    if (!this.state.item) {
      return <h4 className='text-white'>  Please, select a {itemLabel}</h4>
    }

    const { item } = this.state
    const { name } = item

    return (
      <div className='row'>
        <div className='col'>
          <Card style={{ borderColor: '#333' }}>
            <CardBody>
              <h4 style={{ textAlign: 'center' }} className='text-black'>
                <span className='text-primary font-weight-bold'><i>{name ? name : 'no info:('}</i></span>
              </h4>
              <ul className={style.list}>
                {
                  React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {item})
                  })
                }
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}