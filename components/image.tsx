type ImageProps = {
  path: string
}

export const imageSizes: number[] = [320, 640, 1080]

export function imageSrc(path: string, width?: number): string {
  const filename: string = !!path ? path : "default.jpg"
  const size = !!width ? width : imageSizes[0]

  const query: string[] = ["webp", "resize", `size=${size}`]
  // const file: string = require(`images/${filename}?${query.join("&")}`)
  const file: string = require(`images/${filename}?webp&resize&size=640`)

  return file
}

export function imageSet(path: string): string {
  const filename: string = !!path ? path : "default.jpg"

  const file = require(`images/${filename}?resize&sizes[]=640&sizes[]=750&sizes[]=1080`)
  console.log(file)

  return file.srcSet
}
