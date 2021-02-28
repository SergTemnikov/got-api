import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppHeader = () => {

  const titleClass = 'd-flex align-items-center text-dark font-weight-bold'

  return (
    <div className='container d-flex justify-content-between mb-3 mt-3'>
      <NavbarBrand className={titleClass} href="/">Game of Thrones Database</NavbarBrand>
      <Navbar expand="md">
        <Nav className='d-flex justify-content-end' navbar>
            <NavItem href="#">
              <NavLink style={{cursor: 'pointer', paddingRight: '30px'}} className='text-light font-weight-bold'>Characters</NavLink>
            </NavItem>
            <NavItem href="#">
              <NavLink style={{cursor: 'pointer', paddingRight: '30px'}} className='text-light font-weight-bold'>Houses</NavLink>
            </NavItem>
            <NavItem href="#">
              <NavLink style={{cursor: 'pointer', paddingRight: '30px'}} className='text-light font-weight-bold'>Books</NavLink>
            </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default AppHeader
