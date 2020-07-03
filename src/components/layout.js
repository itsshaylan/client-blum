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
            <Col>
              <p className="footer-title">BLUM</p>
              <p>@blumnailbarict</p>
            </Col>
            <Col>
              <p>
                3560 N Maize Rd Suite 102. <br />
                Wichita, KS 67205
              </p>
              <p>(316) 729-2586</p>

              <p>blumnailbarict@gmail.com</p>
            </Col>
            <Col>
              <p>
                home
                <br />
                services
                <br />
                contact us
              </p>
            </Col>
          </Row>
        </Container>
        {/* © {new Date().getFullYear()} */}
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
