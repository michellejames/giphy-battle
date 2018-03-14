import Vue from 'vue'
import Router from 'vue-router'
import GameSetup from '@/components/GameSetupComponent'
import ActiveGame from '@/components/ActiveGameComponent'
import GiphySearch from '@/components/GiphySearchComponent'
import WinnerScreen from '@/components/WinnerComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameSetup',
      component: GameSetup,
      meta: { bodyClass: 'gamesetup' },
    },
    {
      path: '/game',
      name: 'ActiveGame',
      component: ActiveGame
    },
    {
      path: '/submit',
      name: 'GiphySearch',
      component: GiphySearch
    },
    {
      path: '/winner',
      name: 'WinnerScreen',
      component: WinnerScreen
    }
  ]
})
