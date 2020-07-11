import React from "react"
import "./index.scss"

import Layout from "../components/layout"
import Social from "../components/social"
import SEO from "../components/seo"
import Billboard from "../components/billboard"
import Special from "../components/special"

import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      staticMap {
        mapUrl
        childFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const sitetitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title={`${sitetitle} Homepage`} />
      <Billboard
        className="homepage_header"
        image="IMG_0068.jpg"
        style={{ "background-position": "center" }}
      >
        <h1 className="brand-title">{sitetitle}</h1>
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

      <Billboard
        image="IMG_0300_edit.jpg"
        color={"#847577"}
        className="index-whatis"
      >
        <h1>What is {sitetitle}?</h1>
        <p>Beauty - Lashes - U - Me</p>
      </Billboard>

      <div className="container pad">
        <h3>The {sitetitle} Specials</h3>
        <Special />
      </div>

      <div>
        <div className="container pad text-center">
          <Row>
            <Col md={6}>
            {/* <Col md={6} vocab="http://schema.org/" typeof="NailSalon"> */}
              <h3>Contact Us</h3>
              <p property="address" typeof="PostalAddress">
                <a href={data.staticMap.url} property="streetAddress">
                  3560 N Maize Rd Suite 102.
                </a>
                <br />
                <span property="addressLocality">Wichita</span>,{" "}
                <span property="addressRegion">KS</span>{" "}
                <span property="postalCode">67205</span>
              </p>
              <p>
                <a
                  href="tel:+13167292586"
                  property="telephone"
                  content="+13167292586"
                >
                  (316) 729-2586
                </a>
                <br />
                <a href="mailto:blumnailbarict@gmail.com" property="email">
                  blumnailbarict@gmail.com
                </a>
              </p>
              <p>Hours of Operation</p>
              <p property="openingHours" content="Mo,Tu,We,Th,Fr 09:00-19:00">
                Monday - Friday
                <br />
                9:00 AM - 7:00 PM
              </p>
              <p property="openingHours" content="Sa 09:00-18:00">
                Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
              <p property="openingHours" content="Su 12:00-17:00">
                Sunday
                <br />
              12:00 PM - 5:00 PM
              </p>
            </Col>
            <Col md={6}>
              <a href={data.staticMap.url}>
                <img
                  src={data.staticMap.childFile.childImageSharp.fluid.src}
                  alt=""
                  style={{ width: "100%" }}
                />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
