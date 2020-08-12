import Header from "./header"

const Layout = props => (
  <div className="page">
    <Header />
    <div className="page">{props.children}</div>
  </div>
)

export default Layout
