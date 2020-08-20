import styles from "./footer.module.scss"
import { menu } from "./header"

type FooterProps = {
  path?: string
  products?: any[]
}

const products = require("../data/products.json")

const socials = [
  { name: "Instagram", site: "https://www.instagram.com/blumnailbarict/" },
  { name: "Facebook", site: "https://www.facebook.com/BLUMnailbarICT/" },
]

export const Footer: React.FunctionComponent<FooterProps> = props => {
  return (
    <>
      <footer className={styles.footer}>
        {/* sections */}
        <div className={`container ${styles.container}`}>
          {/* pages */}
          <div className={styles.listing}>
            <div className={styles.category}>
              <span className={styles.name}>BLUM</span>
              <p>Nail Bar</p>
              <p>
                3560 N Maize Rd Suite 102. <br />
                Wichita, KS 67205
              </p>
              <br />
              <p>(316) 729-2586</p>
              <br />
              <p>
                &copy; {new Date().getFullYear()} BLUM - all rights reserved
              </p>
            </div>
            <div className={styles.category}>
              <ul>
                <h4>Social Media</h4>
                {socials.map(social => {
                  return (
                    <li key={social.name} className={styles.item}>
                      <a href={social.site}>{social.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles.category}>
              <ul>
                <h4>Pages</h4>
                {menu.map(page => {
                  return (
                    <li key={page.name} className={styles.item}>
                      <a href={page.path}>{page.name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* products */}
            {/* <div className={styles.category}>
              <ul>
                <h4>Products</h4>
                {products.map(product => {
                  const productLink = `/products#${product.type}`
                  return (
                    <li className={styles.item}>
                      <a href={productLink}>{product.type}</a>
                    </li>
                  )
                })}
              </ul>
            </div> */}
            {/* book now */}
          </div>
          {/* bottom footer */}
        </div>
        {/* address */}
        <div></div>
      </footer>
    </>
  )
}

export default Footer
