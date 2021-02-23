import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './app-header.module.css'


const AppHeader = () => {

  const titleClass = 'd-flex align-items-center text-dark font-weight-bold'

  return (
    <div className='container d-flex justify-content-between'>
      <NavbarBrand className={titleClass} href="/">Game of Thrones Database</NavbarBrand>
      <Navbar expand="md">
        <Nav className='d-flex justify-content-end' navbar>
          <NavbarBrand>
            <NavLink className='text-light font-weight-bold' href="#">Characters</NavLink>
          </NavbarBrand>
          <NavbarBrand>
            <NavLink className='text-light font-weight-bold' href="#">Houses</NavLink>
          </NavbarBrand>
          <NavbarBrand>
            <NavLink className='text-light font-weight-bold' href="#">Books</NavLink>
          </NavbarBrand>
        </Nav>
      </Navbar>
    </div>
  )
}

export default AppHeader
