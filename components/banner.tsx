type BannerProps = {
  path: string
  padding?: string
  color?: string
}

export const Banner: React.FunctionComponent<BannerProps> = props => {
  const imageSrc = require(`images/${props.path}?webp&resize&size=400`)
  // const imageSet = require(`images/${props.path}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
  const color: string = !!props.color ? props.color : "#4A4340"
  const padding: string = !!props.padding ? props.padding : "20vh"

  const style: React.CSSProperties = {
    background: `linear-gradient(0deg, ${color}, ${color}), linear-gradient(0deg, #4A4340, #4A4340), url(${imageSrc})`,
    backgroundBlendMode: `color, hard-light, normal`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    padding: `${padding} 0`,
  }

  return (
    <div className="banner" style={style}>
      {props.children}
    </div>
  )
}

export default Banner
