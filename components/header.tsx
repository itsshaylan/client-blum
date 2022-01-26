import { useState } from "react"
import Link from "next/link"

interface HeaderProps {
  path?: string
}

export const menu = [
  { path: "/", name: "home" },
  { path: "/gallery", name: "gallery" },
  { path: "/media", name: "media" },
  { path: "https://go.booker.com/location/BlumNailBarV1/buy/gift-certificate", name: "e-gift", ext: true },
  { path: "/products", name: "products" },
  { path: "/policy", name: "policy" },
]

export const bookAppointment = "https://go.booker.com/location/BlumNailBarV1"

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
                  <Link
                    href={link.ext ? `/policy?redirect=${encodeURIComponent(encodeURIComponent(link.path))}` : link.path}
                    as={!link.ext ? null : `/redirect?link=${encodeURIComponent(encodeURIComponent(link.path))}`}
                  >
                    <a className={link.path === props.path ? "active" : ""}>
                      {link.name}
                    </a>
                  </Link>
                </li>
              )
            })}
            <li className="">
              <Link
                href={`tel:3167993982`}
                as={`tel:3167993982`}
              >
                <a className="button">
                  call us
                </a>
              </Link>
            </li><li className="">
              <Link
                href={`/policy?redirect=${encodeURIComponent(encodeURIComponent(bookAppointment))}`}
                as={`/redirect?link=${encodeURIComponent(encodeURIComponent(bookAppointment))}`}
              >
                <a className="button">
                  book appointment
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
