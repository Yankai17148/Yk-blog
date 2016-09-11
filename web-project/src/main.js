import './static/css/normalize.css'
import './static/less/main.less'
import './static/less/markdown.less'
import './static/css/hybrid.css'
import 'animate.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Wow from 'wow.js'
import marked from 'marked'
import FastClick from 'fastclick'
import app from './App.vue'
import routes from './routes'
import cookieUtil from './util/cookieUtil'
import filters from './util/filters'


Vue.use(VueRouter)
Vue.use(VueResource)
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

let wow = new Wow().init()

FastClick.attach(document.body)

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false,
	highlight: (code) => {
		return require('highlight.js').highlightAuto(code).value;
	}
});

Vue.config.debug = true

let router = new VueRouter({
	hashbang: true,
	history: true,
	saveScrollPosition: false,
	transitionOnLoad: false,
	suppressTransitionError: true
})

router.map(routes)

router.beforeEach((transition) => {
	// window.scrollTo(0, 0)
	if (transition.to.auth) {
		if (cookieUtil.getCookie('isLogin') == '1') {
			transition.next()
		}else {
			transition.redirect('/login')
		}
	}else {
		transition.next()
	}
})

router.redirect({
	'/': '/home',
	'*': '/home'
})

console.log('%c { Have Suggest? issues me! }', 'font-family: Monaco;font-size: 15px;line-height: 60px; color: #ccc; font-weight: bold;')

router.start(app, '#app')

