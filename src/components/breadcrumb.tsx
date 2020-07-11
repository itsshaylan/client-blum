import React from "react"
import "./breadcrumb.scss"

import { Link } from "gatsby"
const Breadcrumb = ({ items }: { items: any[] }) => {
  items = !!items ? items : []
  if (items.length === 0) return <></>
  return (
    <>
      <div className="bc">
        <div className="container">
          <nav
            className="bc"
            vocab="https://schema.org"
            typeof="BreadcrumbList"
          >
            {items.map((item, index) => {
              return (
                <li property="itemListElement" typeof="ListItem">
                  <Link to={item.link} property="item" typeof="WebPage">
                    <span property="name">{item.text}</span>
                  </Link>
                  <meta property="position" content={(index + 1).toString()} />
                </li>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
// const Breadcrumb = ({items, children} : { items: any[], children: any]}) => {
//   items = !!items ? items : []
//   return (
//     <>
//       <div>{children}</div>
//     </>
//   )
// }
export default Breadcrumb
