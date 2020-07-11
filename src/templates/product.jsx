import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ProductPage = ({ data }) => {
  const post = data.productsJson
  console.log("post data", post)
  return (
    <Layout>
      <div className="container">
        <h2>{post.name}</h2>
        <p>{post.description}</p>
        <p>{post.price}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String, $code: String) {
    productsJson(
      id: { eq: $id }
      products: { elemMatch: { code: { eq: $code } } }
    ) {
      id
      products {
        code
      }
    }
  }
`

export default ProductPage
