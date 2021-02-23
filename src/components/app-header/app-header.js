import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const AppHeader = () => {
  return (
    <div className='container d-flex justify-content-between'>
      <NavbarBrand className='d-flex align-items-center' href="/">Game of Thrones' Database</NavbarBrand>
      <Navbar expand="md">    
          <Nav className='d-flex justify-content-end' navbar>
            <NavItem>
              <NavLink href="#">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Houses</NavLink>
            </NavItem>  
            <NavItem>
              <NavLink href="#">Books</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}

export default AppHeader
