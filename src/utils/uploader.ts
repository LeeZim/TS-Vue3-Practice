import createMessage from './createMessage'
import { RawData, ImageProps } from '../store'

export const beforeUploaded = (file: File) => {
  const isJPG = file.type === 'image/jpeg'
  if (!isJPG) {
    createMessage('图片必须为JPG格式', 'error')
  }
  return isJPG
}

export const fileUploaded = (rawData: RawData<ImageProps>) => {
  createMessage(`图片：${rawData.data._id}上传成功`, 'success')
}
