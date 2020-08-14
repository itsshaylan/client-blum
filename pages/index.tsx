import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Layout from "../components/layout"
import { Card, CardStyle } from "../components/card"
import { Banner } from "../components/banner"

export default function Home() {
  return (
    <Layout page="/">
      <Banner path="5Q0A8786.jpg" padding="20vh">
        <h1>Beauty - Lashes - U - Me</h1>
        <a className="button button-large" href="#">
          BOOK ONLINE
        </a>
      </Banner>
      {/* welcome */}
      <div className="content">
        <div className="container text-justify">
          <h2 className="text-center">Welcome to BLUM</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            erat tortor, eu lacus nec ultricies pellentesque. At faucibus magna
            bibendum curabitur sit et. Non diam pellentesque arcu viverra
            fermentum pulvinar blandit. Gravida vitae semper ante eu nisl. At
            velit nibh amet elementum. Ac ac convallis ut posuere dolor. Amet
            pharetra faucibus condimentum morbi ac. Morbi velit a elit, odio.
          </p>
          <p>
            Turpis in mattis facilisis scelerisque. Condimentum id amet,
            vestibulum rhoncus dui rutrum curabitur ultrices. Lorem volutpat,
            hendrerit sapien ut vehicula. Donec quam lorem et tincidunt cursus
            nulla vitae morbi id. Purus ante cursus curabitur eu proin quis
            facilisi mi malesuada. Quam vulputate sit congue mauris in consequat
            sed feugiat mauris. Posuere mattis euismod nam adipiscing ultricies.
            Eget libero nulla varius dui purus diam velit placerat. Quis donec
            eget et dui venenatis vitae in odio. Convallis libero, id interdum
            pretium integer. Lectus hendrerit ligula mi mi ut. Dignissim lacinia
            id vel, consectetur sagittis cras mi nulla. Ac quis volutpat
            bibendum integer dolor morbi interdum.
          </p>
          <p>
            Ut mauris lacinia purus vitae enim. Pellentesque erat commodo eu est
            id. Amet, tempor, imperdiet luctus hac. Arcu enim gravida quis
            varius dolor pharetra, viverra. Eros ultricies id iaculis eu nulla.
            Metus erat bibendum dolor imperdiet adipiscing. Sed tortor commodo
            accumsan volutpat ut eleifend dolor non tellus. Malesuada
            scelerisque scelerisque vitae viverra.{" "}
          </p>
        </div>
      </div>
      {/* images */}
      <div className="content">
        <div className="container">
          <h2>images</h2>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className={CardStyle.card_container}>
            <Card>
              <h3>Manicures</h3>
              <p>
                Natural nail care and reshaping, cutical details, buffing, and
                cooling gel. Intensive soak.
              </p>
            </Card>
            <Card image="5Q0A8742.jpg">
              <h3>Manicures</h3>
              <p>
                Natural nail care and reshaping, cutical details, buffing, and
                cooling gel. Intensive soak.
              </p>
            </Card>
            <Card>
              <h3>Manicures</h3>
              <p>
                Natural nail care and reshaping, cutical details, buffing, and
                cooling gel. Intensive soak.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
