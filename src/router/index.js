import Vue from 'vue'
import Router from 'vue-router'
import CalendarComponent from '@/components/CalendarComponent'
import EventComponent from '@/components/EventComponent'
import EditComponent from '@/components/EditComponent'
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
    },
    {
      path: '/edit',
      name: 'Edit',
      component: EditComponent,
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
