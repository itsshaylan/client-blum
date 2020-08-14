import Header from "./header"

import { Banner as banner } from "./banner"
import Head from "next/head"
import Footer from "./footer"
export const Banner = banner

type LayoutProps = {
  page?: string
  title?: string
  image?: string
  description?: string
}

export const Layout: React.FunctionComponent<LayoutProps> = props => {
  const domain = "https://blumnailbar.com/"

  const ogTitle = !!props.title ? `${props.title} - BLŪM` : `BLŪM`
  const ogURL = `domain${props.page}`
  const ogImage = !!props.image ? props.image : "default.jpg"
  const ogDesc = !!props.description
    ? props.description
    : "Beauty - Lashes - U - Me"

  return (
    <div className="page">
      <Head>
        <title>{ogTitle}</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogURL} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="BLUM" />
        <meta property="og:description" content={ogDesc} />
      </Head>
      <Header path={props.page} />
      <main className="page">{props.children}</main>
      <Footer path={props.page} />
    </div>
  )
}
export default Layout
