import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/mainpage/HelloWorld'

const Animals = () => import("@/components/Animals/Animals")
const Lessons = () => import("@/components/Lessons/lessons")

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Animals',
      name: 'Animals',
      component: Animals
    },
    {
      path: '/Lessons',
      name: 'Lessons',
      component: Lessons
    }
  ]
})
