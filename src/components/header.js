import { Link } from "gatsby"
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
            <Nav.Link href="/">services</Nav.Link>
            <Nav.Link href="/">book us</Nav.Link>
            <Nav.Link href="/">about</Nav.Link>
            <Nav.Link href="/">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
const HeaderA = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
