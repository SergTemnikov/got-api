import React from 'react'

const RowBlock = ({left, right}) => {
    return (
      <div style={{marginBottom: '10px'}} className='container'>
      <div className='row'>
        <div className='col'>
          {left}
        </div>
        <div className='col'>
          {right}
        </div>
      </div>
    </div>
    )
}

export default RowBlock