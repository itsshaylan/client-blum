import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <footer>
        <Container className="text-center">
          <Row>
            <Col xs={12} md={4}>
              <p className="footer-title">BLŪM</p>
              <p>@blumnailbarict</p>
            </Col>
            <Col xs={12} md={4} id="contact">
              <p>
                3560 N Maize Rd Suite 102. <br />
                Wichita, KS 67205
              </p>
              <p>
                <a href="tel:+13167292586">(316) 729-2586</a>
              </p>

              <p>
                <a href="mailto:blumnailbarict@gmail.com">
                  blumnailbarict@gmail.com
                </a>
              </p>
            </Col>
            <Col xs={12} md={4}>
              <p>
                <a href="/">home</a>
                <br />
                <a href="https://go.booker.com/location/BlumNailBarV1">
                  book us
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
