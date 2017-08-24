import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Weblog from '@/components/Weblog'
import Creations from '@/components/Creations'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/weblog',
      name: 'Weblog',
      component: Weblog
    },
    {
      path: '/creations',
      name: 'Creations',
      component: Creations
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
