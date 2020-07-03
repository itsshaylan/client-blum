import React from "react"
import { Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const Billboard = ({ image, color, className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allImageSharp {
        nodes {
          fluid(
            webpQuality: 100
            maxHeight: 1080
            maxWidth: 1080
            fit: OUTSIDE
          ) {
            src
            originalName
          }
        }
      }
    }
  `)
  const img = data.images.nodes.find(img => img.fluid.originalName === image)

  color = !color ? "#847577" : color
  return (
    <div
      className={`billboard ${className}`}
      style={{
        background: `linear-gradient(0deg, ${color}, ${color}), linear-gradient(0deg, #4A4340, #4A4340), url(${img.fluid.src})`,
        "background-blend-mode": `color, hard-light, normal`,
        "background-position": `center center`,
        "background-size": "cover",
      }}
    >
      <Container>{children}</Container>
    </div>
  )
}
export default Billboard
