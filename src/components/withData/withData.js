import React, {Component} from 'react'
import ItemList from '../item-list'
import Spinner from '../spinner'
import gotService from '../../services/fetch-service'

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