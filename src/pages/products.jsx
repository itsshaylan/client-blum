import React from "react"
import "./products.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import Billboard from "../components/billboard"

import { useStaticQuery, graphql, Link } from "gatsby"
const path = require("path")

const ProductsPage = () => {
  const data = useStaticQuery(graphql`
    {
      products: allProductsJson {
        nodes {
          type
          products {
            name
            code
            price
            addon
            description
          }
        }
      }
    }
  `).products

  return (
    <Layout>
      <SEO title="Products" />
      <Billboard padding="5">
        <h1>Products</h1>
      </Billboard>
      <Breadcrumb
        items={[
          { link: "/", text: "Home" },
          { link: "/products", text: "Products" },
        ]}
      />
      <div className="container pad">
        {data.nodes.map(node => {
          const productsLink = path.join(node.type)
          const products = node.products.filter(
            product => product.addon === "FALSE"
          )
          const addons = node.products.filter(
            product => product.addon === "TRUE"
          )

          return (
            <div className="productContainer">
              <h2>
                <Link to={productsLink}>{node.type}</Link>
              </h2>
              <div className="productType">
                {products.splice(0, 4).map(product => {
                  const productLink = path.join(productsLink, product.code)
                  return (
                    <div className="productListing">
                      <h5>{product.name}</h5>
                      <p>{product.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="text-center">
                <Link to={node.type}>see all options</Link>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProductsPage
