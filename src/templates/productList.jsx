import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Billboard from "../components/billboard"
import Breadcrumb from "../components/breadcrumb"

const Product = ({ data }) => {
  return (
    <>
      <div class="productListing">
        <h4>{data.name}</h4>
      </div>
    </>
  )
}

const ProductsList = ({ data }) => {
  const page = data.productsJson

  const products = page.products.filter(node => node.addon === "FALSE")
  const addons = page.products.filter(node => node.addon === "TRUE")

  return (
    <Layout>
      <Billboard padding={5}>
        <h1>{page.type}</h1>
      </Billboard>
      <Breadcrumb
        items={[
          { link: "/", text: "Home" },
          { link: "/products", text: "Products" },
          { link: `/products/${page.type}`, text: page.type },
        ]}
      />

      <div className="container pad">
        <div>
          <h2>{page.type} packages</h2>
          {page.products.map(node => {
            if (node.addon === "FALSE")
              return (
                <div
                  style={{
                    borderBottom: `1px solid #f0f0f0`,
                    marginBottom: `8px`,
                  }}
                >
                  <h5>{node.name}</h5>
                  <p>
                    <span
                      style={{
                        fontWeight: "bolder",
                      }}
                    >
                      ${node.price}
                    </span>
                    {` - `}
                    {node.description}
                  </p>
                </div>
              )
          })}
        </div>
      </div>
      <div className="container pod">
        <div>
          <h2>Addons</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {page.products
              .filter(node => node.addon === "TRUE")
              .map(node => {
                return (
                  <div style={{ margin: "16px", flex: "25%" }}>
                    <h5>{node.name}</h5>
                    <p>${node.price}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    productsJson(id: { eq: $id }) {
      id
      type
      products {
        name
        description
        addon
        code
        price
      }
    }
  }
`

export default ProductsList
