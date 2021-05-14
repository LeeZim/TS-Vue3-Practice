export const objToArr = <T>(obj: { [key: string]: T }) => {
  return Object.keys(obj).map((key) => obj[key])
}

export const arrToObj = <T extends { _id?: string }>(arr: Array<T>) => {
  return arr.reduce((obj, current) => {
    if (current._id) {
      obj[current._id] = current
    }
    return obj
  }, {} as { [key: string]: T })
}

export function addFitImageUrl<T extends { url?: string; fitUrl?: string }>(
  data: T,
  width: number,
  height: number,
  format = ['m_pad']
) {
  if (data && data.url) {
    const formatStr = format.reduce((prev, current) => {
      return `${current},${prev}`
    }, '')
    data.fitUrl = `${data.url}?x-oss-process=image/resize,${formatStr}h_${height},w_${width}`
  }
}
