import Head from "next/head"
import React from "react"
import styles from "./products.module.scss"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import Layout, { Banner } from "../components/layout"
import { Product, ProductList } from "../components/product"

export default function Page({ data }) {
  // console.log("yes", data)

  const list = data.map(d => {
    const type = d.type
  })

  return (
    <Layout
      page="/products"
      title="Products"
      description="Services and Products provided by BLUM nail bar"
    >
      <Banner path="5Q0A8761.jpg">
        <h1>products</h1>
      </Banner>

      {/* grid */}
      <div className="content">
        <div className="container">{/* a */}</div>

        {data.map(d => {
          return (
            <ProductList
              images={d.images}
              key={d.type}
              type={d.type}
              products={d.products}
            />
          )
        })}
      </div>
    </Layout>
  )
}

// Page.getStaticPrios = async ctx => {
export async function getStaticProps() {
  const json = require("../data/products.json")
  return {
    props: {
      data: json,
    },
  }
}
