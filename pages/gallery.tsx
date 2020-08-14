import Head from "next/head"
import Layout from "../components/layout"
import Banner from "../components/banner"

export default function Page() {
  return (
    <Layout page="/gallery">
      <Banner path="5Q0A8742.jpg">
        <h1>gallery</h1>
      </Banner>
    </Layout>
  )
}
