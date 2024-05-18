export default{
    path: '/',
    name: 'Home',
    component: import('@/views/Home.vue'),
    children: [
      {
        path: '/',
        name: '/',
        component: import('@/views/Videos/VideoViews.vue')
      },
      {
        path: '/editvideos',
        name: 'editvideos',
        component: import('@/views/Videos/EditVideo.vue')
      },
    ]
  }