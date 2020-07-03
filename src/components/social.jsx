import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

const SocialGrid = ({ gridItems }) => {
  const data = useStaticQuery(graphql`
    {
      images: allImageSharp {
        n: nodes {
          fluid(
            webpQuality: 100
            maxHeight: 1080
            maxWidth: 1080
            fit: OUTSIDE
          ) {
            src
            originalImg
          }
        }
      }
    }
  `)
  const images = data.images.n.filter(img =>
    img.fluid.originalImg.includes("_n.jpg")
  )
  return (
    <Container>
      <Row>
        {images.map(image => {
          return (
            <Col sm={3}>
              <Social image={image} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

const Social = props => {
  if (!!props.image) {
    return (
      <img
        src={props.image.fluid.src}
        style={{
          borderRadius: "32px",
          maxWidth: "256px",
          maxHeight: "256px",
          objectFit: "cover",
          padding: "8px",
        }}
      />
    )
  } else {
    return <></>
  }
}
export default SocialGrid
