const Header = props => (
  <header>
    <div className="container">
      <span className="header-logo">
        <a>BLUM</a>
        <i className="fas fa-bars toggle"></i>
      </span>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">home</a>
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

export default Header
