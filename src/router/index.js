import Vue from 'vue'
import Router from 'vue-router'
import RaceSelector from '@/components/RaceSelector'
import DNDWelcome from '@/components/DNDWelcome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DNDWelcome',
      component: DNDWelcome
    }, 
    {  
      path: '/race-selector',
      name: 'RaceSelector',
      component: RaceSelector
    }
]
})
