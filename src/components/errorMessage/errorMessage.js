import React from 'react'
import { Alert } from 'reactstrap'

const ErrorMessage = () => {
  return (
      <Alert  
     style={{margin: '0'}} color='danger'>
        Something went wrong! Please, try again later!
      </Alert>
  )
}

export default ErrorMessage