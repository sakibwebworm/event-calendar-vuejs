import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CalendarComponent from '@/components/CalendarComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CalendarComponent',
      component: CalendarComponent
    },
    /*{
      path: '/allentry',
      name: 'AllEntry',
      component: AllEntry
    },
    {
      name: 'ShowEntry',
      path: '/entry/show/:id',
      component: ShowEntry
    },
    {
      name: 'EditEntry',
      path: '/entry/edit/:id',
      component: EditEntry
    }*/
  ]
})
