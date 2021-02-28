import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import gotService from '../../services/fetch-service'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './char-details.module.css'

const Field = ({char, field, label}) => {
  return (
    <li className={style.listItem}>
      <span>{label}:</span>
      <span className='text-primary'>{char[field] ? char[field] : 'no info:('}</span>
    </li>
  )
}

export {Field}

export default class CharDetails extends Component {

  gotService = new gotService()

  state = {
    char: null
  }

  componentDidMount() {
    this.updateChar()
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar()
    }
  }

  updateChar() {
    const { charId } = this.props
    if (!charId) {
      return
    }
    this.gotService.getCharacter(charId)
      .then(char => {
        this.setState({ char })
      })
  }

  render() {

    if (!this.state.char) {
      return <h4 className='text-white'>  Please, select a character</h4>
    }

    const { char } = this.state
    const { name } = char

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
                    return React.cloneElement(child, {char})
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