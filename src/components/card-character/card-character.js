import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './card-character.module.css'
import gotService from '../../services/fetch-service'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'
import PropTypes from 'prop-types'

export default class CardCharacter extends Component {
  
  gotService = new gotService()

  state = {
    char: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updateChar()
    this.timerId = setInterval(this.updateChar, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  

  onCharLoaded = char => {
    this.setState({
      char,
      loading: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateChar = () => {
    const id = Math.floor(Math.random()*140 + 25)
    this.gotService.getCharacter
    (id)
      .then(this.onCharLoaded)
      .catch(this.onError)
  } 

  render() {
    const {char, loading, error} = this.state

    const errorMessage = error ? <ErrorMessage/> : null
    const spinner = loading ? <Spinner/> : null
    const content = !(loading || error) ? <View char={char}/> : null

    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Card style={{borderColor: '#333'}}>
              {errorMessage}
              {spinner}
              {content}
            </Card>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
  }
}

CardCharacter.defaultProps = {
  interval: 10000
}

CardCharacter.propTypes = {
  interval: PropTypes.number
}

const View = ({char}) => {
  const {name, gender, born, died, culture} = char

  return (
    <>  
      <CardBody>
            <h4 style={{textAlign: 'center'}} className='text-black'>
              Random character: <span className='text-primary font-weight-bold'><i>{name ? name : 'no info:(('}</i></span>
            </h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <span>Gender:</span>
                <span className='text-primary'>{gender ? gender : 'no info:(('}</span>
              </li>
              <li>
                <span>Born:</span>
                <span className='text-primary'>{born ? born : 'no info:(('}</span>
              </li>
              <li>
                <span>Died:</span>
                <span className='text-primary'>{died ? died : 'no info:(('}</span>
              </li>
              <li>
                <span>Culture:</span>
                <span className='text-primary'>{culture ? culture : 'no info:(('}</span>
              </li>
            </ul>
          </CardBody>
    </>
  )
}