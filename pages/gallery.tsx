import Head from "next/head"
import styles from "./gallery.module.scss"
import Layout from "../components/layout"
import Banner from "../components/banner"
import { imageSizes, imageSrc, imageSet } from "../components/image"

export async function getStaticProps() {
  const json = require("../data/gallery.json")
  return {
    props: {
      data: json,
    },
  }
}

export default function Page(props) {
  return (
    <Layout page="/gallery" title="Gallery" description="BLUM Shop Gallery">
      <Banner path="5Q0A8742.jpg">
        <h1>gallery</h1>
      </Banner>

      <div className="content">
        <div className="container">
          <div className={styles.gallery}>
            {props.data.map(data => {
              return (
                <img
                  key={data}
                  className={styles.gallery_image}
                  src={`/images/${data}`}
                  width="200"
                  height="200"
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
