import React from "react"
import "./index.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import Social from "../components/social"
import SEO from "../components/seo"
import Billboard from "../components/billboard"
import Special from "../components/special"

import background from "../images/IMG_0091.jpg"
import { Col, Row } from "react-bootstrap"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="BLUM Homepage" />
      <Billboard
        className="homepage_header"
        image="IMG_0068.jpg"
        style={{ "background-position": "center" }}
      >
        <h1>BLUM</h1>
        <p>Nail Bar</p>
      </Billboard>

      <div
        style={{
          padding: "64px 0px",
        }}
      >
        <div className="container" style={{ "text-align": "center" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            follow us @blumnailbarict
          </p>
          <Social data={{}} />
        </div>
      </div>

      <Billboard image="background-booth.jpg" color={"#847577"}>
        <h1>What is BLUM?</h1>
        <p>Beauty - Lashes - U - Me</p>
      </Billboard>

      <div className="container pad">
        <h3>The BLUM Specials</h3>
        <Special />
      </div>

      <div className="container pad text-center">
        <Row>
          <Col md={3}>
            <h3>Contact Us</h3>
            <p>
              3560 N Maize Rd Suite 102.
              <br />
              Wichita, KS 67205
            </p>
            <p>
              (316) 729-2586
              <br /> blumnailbarict@gmail.com
            </p>
          </Col>
          <Col md={3}>
            <p>Hours of Operation</p>
            <p>
              Monday
              <br />
              9:00 AM - 7:00 PM
            </p>
            <p>
              Tuesday
              <br />
              9:00 AM - 7:00 PM
            </p>
            <p>
              Wednesday
              <br />
              9:00 AM - 7:00 PM
            </p>
            <p>
              Thursday
              <br />
              9:00 AM - 7:00 PM
            </p>
            <p>
              Friday
              <br />
              9:00 AM - 7:00 PM
            </p>
            <p>
              Saturday
              <br />
              9:00 AM - 6:00 PM
            </p>
            <p>
              Sunday
              <br />
              12:00 PM - 5:00 PM
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default IndexPage
