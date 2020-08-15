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
      <Banner path="5Q0A8733.jpg">
        <h1>policy</h1>
      </Banner>

      <div className="content">
        <div className="container">
          {data.forEach((policy, index) => {
            return <p key={index}>policy</p>
          })}
        </div>
      </div>
    </Layout>
  )
}
