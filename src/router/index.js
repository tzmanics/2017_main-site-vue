import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import LandingPage from '@/components/LandingPage'
import Weblog from '@/components/Weblog'
import Videos from '@/components/Videos'
import Creations from '@/components/Creations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/weblog',
      name: 'Weblog',
      component: Weblog
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/creations',
      name: 'Creations',
      component: Creations
    }
  ]
})
