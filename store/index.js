import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
	navigations: null,
	posts: null,

	WEBSITE_NAME: 'Your website name',
	JUMBOTRON: '/img/jumbotron.jpg',
	LOGO: '/img/logo.png',
	AUTHOR_NAME: 'Your name',
	AUTHOR_AVATAR: '/img/author.svg',
	DESCRIPTION: 'Your website description',

	showSideBar: false
})

export const mutations = {
	setSetting(state, settings) {
		state.WEBSITE_NAME = settings.WEBSITE_NAME
		state.JUMBOTRON = settings.JUMBOTRON
		state.LOGO = settings.LOGO
		state.AUTHOR_NAME = settings.AUTHOR_NAME
		state.AUTHOR_AVATAR = settings.AUTHOR_AVATAR
		state.DESCRIPTION = settings.DESCRIPTION
	},

	setNavigations(state, list) {
		state.navigations = list
	},

	setCategoryPosts(state, list) {
		state.posts = list
	},

	setShowSideBar(state, value) {
		state.showSideBar = value
	}
}

export const actions = {
	async nuxtServerInit({ commit }) {
		/**
		 * Load settings from file
		 */
		let setting = await require('~/content/setting.json')
		await commit('setSetting', setting)

		/**
		 * Set navigation link
		 * Each navigation link contains attributes:
		 * - title
		 * - path
		 * - slug
		 * - description
		 * - icon: path to icon image. Full url will be tried to resolve with .svg, .png, .jpg, ... (refer to plugins/mixins.js)
		 */
		let navigations = []
		/**
		 * Get category list
		 */
		let categoryIndexes = await require.context(
			'~/content/categories/',
			false,
			/\.json$/
		)
		let categories = categoryIndexes.keys().map(key => {
			let slug = key.slice(2, -5)
			let category = categoryIndexes(key)
			category.slug = slug

			// Add to navigation list
			navigations.push({
				title: category.title,
				path: '/' + slug,
				slug: slug,
				description: category.description,
				icon: category.icon
			})

			return category
		})

		/**
		 * Get single page list
		 */
		let pageIndexes = await require.context(
			'~/content/pages/',
			false,
			/\.json$/
		)
		let pages = pageIndexes.keys().map(key => {
			let slug = key.slice(2, -5)
			if (slug != 'index') {
				let page = pageIndexes(key)
				page.slug = slug

				// Add to navigation list
				navigations.push({
					title: page.title,
					path: '/' + slug,
					slug: slug,
					description: page.description,
					icon: page.icon
				})

				return page
			}
		})

		await commit('setNavigations', navigations)

		/**
		 * Get all posts
		 * Classify posts into categories
		 * Sort posts of each category by date in descending order
		 */
		let postIndexes = await require.context(
			'~/content/posts/',
			false,
			/\.json$/
		)

		let posts = postIndexes.keys().map(key => {
			let slug = key.slice(2, -5)
			let post = postIndexes(key)
			post.slug = slug
			delete post.body

			return post
		})

		let categoryPosts = {}
		categories.forEach(function(category) {
			categoryPosts[category.slug] = posts.filter(post =>
				post.category.includes(category.title)
			)

			categoryPosts[category.slug].sort((a, b) =>
				a.date < b.date ? 1 : b.date < a.date ? -1 : 0
			)
		})

		await commit('setCategoryPosts', categoryPosts)
	},

	async toggleSideBar({ commit }) {
		let showSideBar = !this.state.showSideBar
		await commit('setShowSideBar', showSideBar)
	}
}

export const store = new Vuex.Store({
	state: state,
	mutations: mutations,
	actions: actions
})
