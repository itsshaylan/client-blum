import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.scss"
import Layout from "../components/layout"
import { Card, CardStyle } from "../components/card"
import { Banner } from "../components/banner"

// import { imageSet } from "../components/image"

export async function getStaticProps() {
  const json = require("../data/services.json")
  return {
    props: {
      data: json,
    },
  }
}

export default function Home({ data }) {
  // console.log(imageSet("5Q0A8742.jpg"))
  const homeimage = require(`images/home.jpg?webp&resize&size=1080`)

  return (
    <Layout page="/">
      <Banner path="5Q0A8786.jpg" padding="20vh">
        <h1 className={styles.title}>Beauty - Lashes - U - Me</h1>
        <a
          className="button button-large"
          href="https://go.booker.com/location/BlumNailBarV1"
        >
          BOOK ONLINE
        </a>
      </Banner>
      {/* welcome */}
      <div className="content">
        <div className="container text-justify">
          <h2 className="text-center">Welcome to BLUM</h2>

          <p className="text-center">
            BLUM Nail Bar is a locally owned business founded in Wichita Kansas.
          </p>
        </div>
      </div>

      <div
        className={styles.homegrid}
        style={{
          backgroundPosition: "center center",
          backgroundImage: `url(${homeimage})`,
          backgroundSize: "cover",
        }}
      >
        {" "}
      </div>
      {/* images */}
      <div className={styles.grid}></div>
      {/* footer */}
      <div className="content">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <div className={CardStyle.card_container}>
            {data.map(d => {
              const dImg = d.images[0]
              return <Card key={d.type} image={dImg} type={d.type}></Card>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
