import React from "react"
import ProTypes from "prop-types"
import { Container } from "react-bootstrap"

const Title = ({ title, desc, children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        padding: "128px 0px",
      }}
    >
      <Container>
        <h3>{title}</h3>
        <p>{desc}</p>
        {children}
      </Container>
    </div>
  )
}

Title.proTypes = {}

export default Title
