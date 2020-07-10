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
        <h1>{sitetitle}</h1>
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

      <Billboard image="IMG_0300_edit.jpg" color={"#847577"}>
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
            <Col md={3}>
              <h3>Contact Us</h3>
              <p>
                <a href={data.staticMap.url}>3560 N Maize Rd Suite 102.</a>
                <br />
                Wichita, KS 67205
              </p>
              <p>
                <a href="tel:+13167292586">(316) 729-2586</a>
                <br />
                <a href="mailto:blumnailbarict@gmail.com">
                  blumnailbarict@gmail.com
                </a>
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
            <Col md={6}>
              <a href={data.staticMap.url}>
                <img
                  src={data.staticMap.childFile.childImageSharp.fluid.src}
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
