import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const AppHeader = () => {

  const titleClass = 'd-flex align-items-center text-dark font-weight-bold'

  return (
    <div className='container d-flex justify-content-between mb-3 mt-3'>
      <NavbarBrand className={titleClass} href="/">
        <Link to='/'>Game of Thrones Database</Link>
      </NavbarBrand>
      <Navbar expand="md">
        <Nav className='d-flex justify-content-end' navbar>
            <NavItem>
              <NavLink>
                <Link style={{cursor: 'pointer', paddingRight: '30px'}} className='text-light font-weight-bold' to='/characters/'>Characters</Link>
              </NavLink> 
            </NavItem>
            <NavItem>
              <NavLink>
                <Link style={{cursor: 'pointer', paddingRight: '30px'}} className='text-light font-weight-bold' to='/houses/'>Houses</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link style={{cursor: 'pointer', paddingRight: '30px'}} className='text-light font-weight-bold' to='/books/'>Books</Link>
              </NavLink>
            </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default AppHeader
