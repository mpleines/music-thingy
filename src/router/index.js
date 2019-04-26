import Vue from 'vue'
import Router from 'vue-router'
import IntervalThing from '@/components/IntervalThing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IntervalThing',
      component: IntervalThing
    }
  ]
})
