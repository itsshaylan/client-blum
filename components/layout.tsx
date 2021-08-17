import Modal from "react-modal"
import React, { Component } from "react"
import { NextRouter, useRouter } from "next/router"
import Head from "next/head"
import banner from "./banner"
import { Redirect } from "./redirect"
import { Header } from "./header"
import { Footer } from "./footer"

// import Head from "next/head"
// import { NextRouter, useRouter } from "next/router"
// import Header from "./header"
// import { Banner as banner } from "./banner"
// import Footer from "./footer"
// import { Redirect } from "./redirect"
// import { Component } from "react"

export const Banner = banner

type LayoutProps = {
  page?: string
  title?: string
  image?: string
  description?: string
  router?: NextRouter
}

interface LayoutStates {
  showModal: boolean
  redirLink: string
}

export const Layout: React.FunctionComponent<LayoutProps> = props => {
  const router = useRouter()
  return <LayoutComponent {...props} router={router} />
}

export class LayoutComponent extends Component<LayoutProps, LayoutStates> {
  constructor(props) {
    super(props)
    console.log('cur state', JSON.stringify(this.props.router.query))
    const showModal: boolean = !!this.props.router.query.redirect
    this.state = {
      showModal: showModal,
      redirLink: showModal ? decodeURIComponent(this.props.router.query.redirect.toString()) : ''
    }
  }

  render() {
    const domain = "https://blumnailbar.com/"

    const ogTitle = !!this.props.title ? `${this.props.title} - BLŪM` : `BLŪM`
    const ogURL = `domain${this.props.page}`
    const ogImage = !!this.props.image ? this.props.image : "default.jpg"
    const ogDesc = !!this.props.description
      ? this.props.description
      : "Beauty - Lashes - U - Me"

    Modal.setAppElement("#__next")

    return (
      <>
        <div className="page">
          <Head>
            <title>{ogTitle}</title>
            <meta property="og:title" content={ogTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogURL} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="BLŪM" />
            <meta property="og:description" content={ogDesc} />
          </Head>
          <Header path={this.props.page} />
          <main>{this.props.children}</main>
          <Footer path={this.props.page} />
        </div>
        <Modal
          isOpen={this.state.showModal}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => { this.setState({ showModal: false }) }}
        >
          <Redirect link={this.state.redirLink}></Redirect>
        </Modal>
      </>
    )
  }
}