import Head from "next/head"
import React from "react"
import { Banner, Layout } from "../components/layout"

export async function getStaticProps() {
  const json = require("../data/policy.json")
  return {
    props: {
      data: json,
    },
  }
}

export default function PolicyPage({ data }) {
  return (
    <Layout page="/policy" title="Policy">
      <Banner path="unsplash.jpg">
        <h1>policy</h1>
      </Banner>

      <div className="content">
        <div className="container">
          {data.map(policy => {
            return <p>{policy}</p>
          })}
        </div>
      </div>
    </Layout>
  )
}
