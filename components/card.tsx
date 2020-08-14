import styles from "../styles/card.module.scss"
export const CardStyle = styles

type CardProps = {
  path?: string
  image?: string
}

export const Card: React.FunctionComponent<CardProps> = props => {
  // props.image = !!props.image ? props.image : `default.jpg`
  const imagePath = !!props.image ? props.image : `default.jpg`
  const imageSrc = require(`images/${imagePath}?webp&resize&size=640`)

  const style: React.CSSProperties = {
    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #847577 100%),  url(${imageSrc}), #FFFFFF;
border-radius: 16px 16px 0px 0px`,
    backgroundSize: "cover",
  }
  return (
    <div className={styles.card}>
      <div className={styles.card_body} style={style}>
        {props.children}
      </div>
      <div className={styles.card_footer}>
        <a href="#">see all manicure options</a>
      </div>
    </div>
  )
}

export default Card
