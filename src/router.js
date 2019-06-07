import Vue from 'vue'
import Router from 'vue-router'
import Form from './views/Form.vue'
import Intro from './views/Intro.vue'
import Question from './views/Question.vue'
import Animation from './views/Animation.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/frage/:questionID',
      name: 'question',
      props: true,
      component: Question
    },
    {
      path: '/resultat',
      name: 'result',
      component: Result
    },
    {
      path: '/auswertung...',
      name: 'animation',
      component: Animation
    }
  ]
})
