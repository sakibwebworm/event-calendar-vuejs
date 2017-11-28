import Vue from 'vue'
import Router from 'vue-router'
import CalendarComponent from '@/components/CalendarComponent'
import EventComponent from '@/components/EventComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CalendarComponent',
      component: CalendarComponent
    },
    {
      path: '/events',
      name: 'Event',
      component: EventComponent,
    }/*,
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
