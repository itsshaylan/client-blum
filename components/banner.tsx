type BannerProps = {
  path: string
  padding?: string
  color?: string
}

export const Banner: React.FunctionComponent<BannerProps> = props => {
  // props.path = !!props.path ? props.path : `default.jpg`
  const imageSrc = require(`images/${props.path}?webp&resize&size=1024`)
  const imageArr = require(`images/${props.path}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)

  const imageSet: string = imageArr.images
    .map(image => {
      return `"${image.path}" ${Math.round(image.height / imageArr.height)}x`
    })
    .join(", ")

  const color: string = !!props.color ? props.color : "#4A4340"
  const padding: string = !!props.padding ? props.padding : "10vh"

  const style: React.CSSProperties = {
    background: `linear-gradient(0deg, ${color}, ${color}), linear-gradient(0deg, #4A4340, #4A4340), url(${imageSrc})`,
    backgroundBlendMode: `color, hard-light, normal`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    padding: `${padding} 0 5vh`,
  }

  return (
    <div className="banner" style={style}>
      <div className="container">{props.children}</div>
    </div>
  )
}

export default Banner
