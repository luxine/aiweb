export default{
    path: '/',
    name: 'Home',
    component: import('@/views/Home.vue'),
    children: [
      {
        path: '/',
        name: '/',
        component: import('@/views/home/VideoViews.vue')
      }
    ]
  }