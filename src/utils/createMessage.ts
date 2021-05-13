import { createApp } from 'vue'
import Message from '@/components/Message.vue'

export type MessageType = 'success' | 'error' | 'default'

const createMessage = (message: string, type: MessageType) => {
  const messageInstance = createApp(Message, {
    message,
    type
  })

  const msgDiv = document.createElement('div')
  document.body.appendChild(msgDiv)
  messageInstance.mount(msgDiv)
  setTimeout(() => {
    messageInstance.unmount()
    document.body.removeChild(msgDiv)
  }, 2000)
}

export default createMessage
