import Head from "next/head"
import styles from "./gallery.module.scss"
import Layout from "../components/layout"
import Banner from "../components/banner"
import { imageSizes } from "../components/image"

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
    <Layout page="/gallery" title="Gallery" description="BLŪM Shop Gallery">
      <Banner path="5Q0A8742.jpg">
        <h1>gallery</h1>
      </Banner>

      <div className="content">
        <div className="container">
          <div className={styles.gallery}>
            {props.data.map(data => {
              // const imgsrc = require(`images/${data}?webp&resize&size=640`)
              const imgsrc = `/images/gallery/${data}`
              return (
                <div
                  key={data}
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${imgsrc})`,
                    // backgroundSize: "contain",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                >{` `}</div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
