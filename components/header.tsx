import { useState } from "react"

type HeaderProps = {
  path?: string
}

export const menu = [
  { path: "/", name: "home" },
  { path: "/gallery", name: "gallery" },
  { path: "/media", name: "media" },
  { path: "https://go.booker.com/location/BlumNailBarV1", name: "e-gift" },
  { path: "/products", name: "products" },
  // { path: "/policy", name: "policy" },
]

export const Header: React.FunctionComponent<HeaderProps> = props => {
  const [showMenu, setMenu] = useState(true)

  function toggle() {
    setMenu(!showMenu)
  }

  return (
    <header>
      <div className="container">
        <span className="header-logo">
          <a href="/">BLŪM</a>
          <a href="#" onClick={toggle}>
            <i className="fas fa-bars toggle"></i>
          </a>
        </span>
        <nav className={showMenu ? "hide" : "show"}>
          <ul className="nav-links"></ul>
          <ul className="nav-links">
            {menu.map(link => {
              return (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={link.path === props.path ? "active" : ""}
                  >
                    {link.name}
                  </a>
                </li>
              )
            })}
            <li className="">
              <a
                href="https://go.booker.com/location/BlumNailBarV1"
                className="button"
              >
                book appointment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
