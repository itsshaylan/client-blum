import styles from "./product.module.scss"
type ProductProps = {}
export default function Product(props) {
  return <h1>testing</h1>
}

export type Product = {
  name: string
  code: string
  desc?: string
  price?: number
  addon?: string
}

type ProductListProps = {
  images: string[]
  type: string
  products: Product[]
}

export const ProductList: React.FunctionComponent<ProductListProps> = props => {
  const imglist: string[] = props.images

  const images: string[] = !!!props.images
    ? []
    : props.images.map(img => {
        const imgpath = require(`images/${img}?webp&resize&size=320`)
        return imgpath
      })

  return (
    <div id={props.type} className={styles.category}>
      <div className={styles.images}>
        {images.map(image => {
          return (
            <div
              key={image}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          )
        })}
      </div>
      <div className={styles.list}>
        <h3 className={styles.listing_heading}>{props.type}</h3>
        {props.products.map(product => {
          const price: string = `$${product.price.toFixed(2)}`
          return (
            <div key={product.name} className={styles.listing}>
              <span className={styles.name}>
                {product.addon === "TRUE" ? "* " : ""}
                {product.name}
                <sub>{price}</sub>
              </span>
            </div>
          )
        })}
        <a
          className="button"
          style={{ marginTop: "16px", display: "block", textAlign: "center" }}
        >
          BOOK APPOINTMENT
        </a>
      </div>
    </div>
  )
}
