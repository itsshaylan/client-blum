// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

import { Container, Nav, Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">home</Nav.Link>
            {/* <Nav.Link href="/">services</Nav.Link> */}
            <Nav.Link href="https://go.booker.com/location/BlumNailBarV1">
              book us
            </Nav.Link>
            <Nav.Link href="/products">products</Nav.Link>
            <Nav.Link href="#contact">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
