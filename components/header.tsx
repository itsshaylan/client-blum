import { useState } from "react"

type HeaderProps = {
  path?: string
}

export const Header: React.FunctionComponent<HeaderProps> = props => {
  const [showMenu, setMenu] = useState(true)

  const menu = [
    { path: "/", name: "home" },
    { path: "/gallery", name: "gallery" },
    { path: "URLHERE", name: "e-gift" },
    { path: "/products", name: "products" },
    { path: "/policy", name: "policy" },
  ]
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
                <li>
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
              <a href="#" className="button">
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
