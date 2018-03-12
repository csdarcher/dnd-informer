import Vue from 'vue'
import Router from 'vue-router'
import RaceSelector from '@/components/RaceSelector'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RaceSelector',
      component: RaceSelector
    }
  ]
})
