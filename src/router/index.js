import Vue from 'vue'
import Router from 'vue-router'
import RaceSelector from '@/components/RaceSelector'
// import RaceInformation from '@/components/RaceInformation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RaceSelector',
      component: RaceSelector
    }

   
    // {
    //   path: '/:RaceInformation',
    //   name: 'RaceInformation',
    //   component: RaceInformation
    // }
  ]
})
