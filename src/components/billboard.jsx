import React from "react"
import { Container } from "react-bootstrap"

const Billboard = ({ image, color, children }) => {
  color = !color ? "#847577" : color
  return (
    <div
      className="billboard"
      style={{
        background: `linear-gradient(0deg, ${color}, ${color}), url(${image})`,
        "background-blend-mode": `color, normal`,
        "background-size": `cover`,
        "background-position": `center`,
        padding: `10vh 0`,
      }}
    >
      <Container>{children}</Container>
    </div>
  )
}
export default Billboard
