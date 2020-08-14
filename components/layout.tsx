import Header from "./header"

import { Banner as banner } from "./banner"
import Head from "next/head"
export const Banner = banner

type LayoutProps = {
  page?: string
}

export const Layout: React.FunctionComponent<LayoutProps> = props => (
  <div className="page">
    <Head>
      <title>BLUM</title>
    </Head>
    <Header path={props.page} />
    <div className="page">{props.children}</div>
  </div>
)

export default Layout
