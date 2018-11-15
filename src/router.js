
import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Home from './pages/Home/Home.vue'
import Classify from './pages/Classify/Classify.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import proDatalis from './pages/proDatalis/proDatalis.vue'
import datalisPages from './pages/proDatalis/components/datalisPages.vue'
import publicPraise from './pages/proDatalis/components/publicPraise.vue'


import SearchPage from './pages/searchPage.vue'
import register from './pages/register.vue'
import login from './pages/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component:Classify
    },
		{
			path: '/ShopCar',
			name: 'ShopCar',
			component:ShopCar
		},
		{
			path: '/User',
			name: 'User',
			component:User
		},
		{
			path: '/proDatalis',
			name: 'proDatalis',
			component:proDatalis,
			redirect: '/proDatalis/datalisPages',
			children:[
				{
					path: '/proDatalis/datalisPages',
					component:datalisPages
				},
				{
					path: '/proDatalis/publicPraise',
					component:publicPraise
				}
			]
		},
		{
			path: '/SearchPage',
			name: 'SearchPage',
			component:SearchPage
		},
		{
			path: '/register',
			name: 'register',
			component:register
		},
		{
			path: '/login',
			name: 'login',
			component:login
		}
  ]
})
