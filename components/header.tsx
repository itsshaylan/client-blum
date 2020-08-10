import { useState } from "react"

const Header = props => {
  const [showMenu, setMenu] = useState(true)

  function toggle() {
    setMenu(!showMenu)
  }

  return (
    <header>
      <div className="container">
        <span className="header-logo">
          <a>BLUM</a>
          <a href="#" onClick={toggle}>
            <i className="fas fa-bars toggle"></i>
          </a>
        </span>
        <nav style={{ display: showMenu ? "flex" : "none" }}>
          <ul className="nav-links">
            <li>
              <a href="#" onClick={() => alert("c")}>
                home
              </a>
            </li>
            <li>
              <a href="#">gallery</a>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <a href="#" className="active">
                e-gift
              </a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
            <li>
              <a href="#">policy</a>
            </li>
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
