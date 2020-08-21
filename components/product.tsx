import styles from "./product.module.scss"

export type ProductProps = {
  name: string
  image: string
  price: number
  description?: string
}

export const Product: React.FunctionComponent<ProductProps> = props => {
  // const bgImage = require(`images/${props.image}?webp&resize&size=320`)
  const bgImage = `/images/products/${props.image}`

  return (
    <div className={styles.product}>
      <span
        className={styles.preview}
        style={{
          background: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></span>
      <div className={styles.info}>
        <h4>
          {props.name}
          <span style={{ float: "right" }}>
            {Math.round(props.price).toFixed(2)}
          </span>
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Product
