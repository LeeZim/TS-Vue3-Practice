export const objToArr = <T>(obj: { [key: string]: T }) => {
  return Object.keys(obj).map((key) => obj[key])
}

export const arrToObj = <T extends { _id: string }>(arr: Array<T>) => {
  return arr.reduce((obj, current) => {
    if (current._id) {
      obj[current._id] = current
    }
    return obj
  }, {} as { [key: string]: T })
}
