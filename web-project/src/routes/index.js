export default {
	'/': {
		name: 'home',
		component: require('../views/home.vue')
	},
	'/home': {
		name: 'home-link',
		component: require('../views/home.vue')
	},
	'/article': {
		name: 'article',
		component: require('../views/article/index.vue'),
		subRoutes: {
			'/': {
				name: 'article-list',
				component: require('../views/article/article-list.vue')
			},
			'/detail/:id': {
				name: 'article-detail',
				component: require('../views/article/article-detail.vue')
			}
		}
	},
	'/about': {
		name: 'about',
		component: require('../views/about.vue')
	},
	'/login': {
		name: 'login',
		component: require('../views/login.vue')
	},
	'/admin': {
		name: 'admin-index',
		auth: true,
		component: require('../views/admin/admin.vue'),
		subRoutes: {
			'/': {
				name: 'admin-main',
				component: require('../views/admin/index.vue')
			},
			'/addarticle': {
				name: 'add-article',
				component: require('../views/admin/add-article.vue')
			},
			'/editarticle/:id': {
				name: 'edit-article',
				component: require('../views/admin/edit-article.vue')
			}
		}

	}
}