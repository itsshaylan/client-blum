import Head from "next/head"
import React from "react"
import styles from "./media.module.scss"
import Layout from "../components/layout"
import Banner from "../components/banner"

export async function getStaticProps() {
  const json = require("../data/media.json")
  return { props: { data: json } }
}

export default function Page({ data }) {
  return (
    <Layout
      page="/media"
      title="Media"
      description="Videos and other media of BLUM Nail Bar"
    >
      <Banner path="5Q0A8761.jpg">
        <h1>media</h1>
      </Banner>

      <div className="content">
        <div className={`container text-center ${styles.container}`}>
          {data.map(code => {
            return (
              <iframe
                key={code}
                className={styles.iframe}
                width="480"
                height="270"
                src={`https://www.youtube.com/embed/${code}`}
                frameBorder="none"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
