import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export default defineNuxtPlugin(() => {
  if (!socket) {
    const config = useRuntimeConfig()
    socket = io(config.public.socketUrl || 'http://localhost:3001')
  }

  return {
    provide: {
      socket
    }
  }
})

// Использование сокета в компоненте
// const { $socket } = useNuxtApp()

// onMounted(() => {
//   $socket.emit('join-room', { roomId: 'abc' })

//   $socket.on('message', (data) => {
//     console.log('New message:', data)
//   })
// })