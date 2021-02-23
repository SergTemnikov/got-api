import React, { Component } from 'react'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class CardCharacter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Row>
        <Col xs="5">
          <Card className='text-white' style={{ backgroundColor: '#333', borderColor: '#333', opacity: 0.70 }}>
            <CardBody>
              <CardTitle tag="h5">Random Character</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Name:</CardSubtitle>
              <CardText>John Snow</CardText>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Birthday:</CardSubtitle>
              <CardText>09-07-1958</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
        
    )
  }
}