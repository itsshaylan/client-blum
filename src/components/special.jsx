import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Col, Row } from "react-bootstrap"

const Node = ({ data }) => {
  const node = data.node

  const productsLink = require("path").join("products", node.type)
  return (
    <>
      <div
        className="special"
        style={{
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #847577 100%), url(${node.image.childImageSharp.fixed.src}), #FFFFFF`,
        }}
      >
        <h4>{node.title}</h4>
        <div className="special-desc">{node.description}</div>
      </div>
      <div className="special-footer">
        <Link to={productsLink}>see all {node.type} options</Link>
      </div>
    </>
  )
}

const Special = props => {
  const data = useStaticQuery(graphql`
    query AllImages {
      data: allSpecialJson {
        edges {
          node {
            description
            title
            type
            image {
              childImageSharp {
                fixed(height: 512, toFormat: JPG, width: 512) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Row>
        {data.data.edges.map(node => {
          return (
            <Col xs={12} md={6} style={{ marginBottom: "32px" }}>
              <Node data={node} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Special
