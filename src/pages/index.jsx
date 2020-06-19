import React from "react"
import "./index.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import Social from "../components/social"
import SEO from "../components/seo"
import Billboard from "../components/billboard"
import image1 from "../images/70962948_148380046381441_4015095543805328168_n.jpg"
import background from "../images/IMG_0091.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="BLUM Homepage" />
      <div
        class="homepage_header"
        style={{
          background: `linear-gradient(to right, #847577, #847577), url(${background})`,
          "background-blend-mode": `color, normal`,
          "background-size": `cover`,
        }}
      >
        <div className="container">
          <h1>BLŪM</h1>
          <p>NAIL BAR</p>
        </div>
      </div>

      <div>
        <div className="container">
          <h3>Wichita's Finest Nail Bar</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nisl
            donec blandit eget tristique sit laoreet vitae. Pellentesque integer
            est eu fringilla arcu magna.
          </p>
        </div>
      </div>

      <div>
        <div className="container" style={{ 'text-align': 'center' }}>
          <p>follow us @blumnailbarict</p>
          <Social />
        </div>
      </div>

      <Billboard image={image1} color={"#847577"}>
        <h1>Testing</h1>
      </Billboard>
    </Layout>
  )
}

export default IndexPage
