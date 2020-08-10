import Header from "./header"

const Layout = props => (
  <div className="page">
    <Header />
    <div className="content">{props.children}</div>
    <h3>Ending Portion</h3>
  </div>
)

export default Layout
