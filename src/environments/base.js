export default function baseEnv() {
  return {
    route: {
      baseRoute: '/',
    },
    socketURL: 'http://localhost:3001',
    chatApi: {
      baseURL: 'http://localhost:3001',
      routes: {
        user: {
          create: '/user/create',
          getById: '/user/:id',
        },
        message: {
          getByRoom: '/message/room/:room',
        },
      },
    },
  }
}
