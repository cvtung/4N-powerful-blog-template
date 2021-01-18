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

	SOCIAL_SHARING: {
		buffer: true,
		telegram: true,
		hackernews: true,
		odnoklassniki: true,
		facebook: true,
		weibo: true,
		xing: true,
		evernote: true,
		instapaper: true,
		whatsapp: true,
		twitter: true,
		twitter_username: '4NPowerfulBlog',
		line: true,
		yammer: true,
		vk: true,
		pocket: true,
		skype: true,
		sms: true,
		flipboard: true,
		wordpress: true,
		quora: true,
		pinterest: true,
		baidu: true,
		viber: true,
		stumbleupon: true,
		email: true,
		tumblr: true,
		linkedin: true,
		reddit: true
	},

	showSideBar: false
})

export const mutations = {
	setGeneralSetting(state, settings) {
		state.WEBSITE_NAME = settings.WEBSITE_NAME
		state.JUMBOTRON = settings.JUMBOTRON
		state.LOGO = settings.LOGO
		state.AUTHOR_NAME = settings.AUTHOR_NAME
		state.AUTHOR_AVATAR = settings.AUTHOR_AVATAR
		state.DESCRIPTION = settings.DESCRIPTION
	},

	setSocialSharingSetting(state, settings) {
		for (let key in settings) {
			state.SOCIAL_SHARING[key] = settings[key]
		}
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
		let generalSetting = await require('~/content/settings/general.json')
		await commit('setGeneralSetting', generalSetting)

		let socialSharingSetting = await require('~/content/settings/social-sharing.json')
		await commit('setSocialSharingSetting', socialSharingSetting)

		let navigationBarSetting = await require('~/content/settings/navigation-bar.json')

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
		let categoryNavigations = []
		let pageNavigations = []
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
			category.path = '/' + slug

			return category
		})

		if (
			Array.isArray(navigationBarSetting.categories.list) &&
			navigationBarSetting.categories.list.length
		) {
			navigationBarSetting.categories.list.forEach(function(entry) {
				let filteredItems = categories.filter(
					category => category.slug == entry
				)
				if (filteredItems[0]) {
					categoryNavigations.push(filteredItems[0])
				}
			})

			if (!navigationBarSetting.categories['display-selected-only']) {
				let nonSelectedCategories = categories.filter(
					category =>
						!navigationBarSetting.categories.list.includes(
							category.slug
						)
				)

				nonSelectedCategories.sort((a, b) =>
					a.title.localeCompare(b.title)
				)

				categoryNavigations = categoryNavigations.concat(
					nonSelectedCategories
				)
			}
		} else {
			categoryNavigations = categories.sort((a, b) =>
				a.title.localeCompare(b.title)
			)
		}

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
				page.path = '/' + slug
				delete page.body

				return page
			}
		})
		pages = pages.filter(page => page !== undefined)

		if (
			Array.isArray(navigationBarSetting.pages.list) &&
			navigationBarSetting.pages.list.length
		) {
			navigationBarSetting.pages.list.forEach(function(entry) {
				let filteredItems = pages.filter(page => page.slug == entry)
				if (filteredItems[0]) {
					pageNavigations.push(filteredItems[0])
				}
			})
			if (!navigationBarSetting.pages['display-selected-only']) {
				let nonSelectedPages = pages.filter(
					page => !navigationBarSetting.pages.list.includes(page.slug)
				)
				nonSelectedPages.sort((a, b) => a.title.localeCompare(b.title))
				pageNavigations = pageNavigations.concat(nonSelectedPages)
			}
		} else {
			pageNavigations = pages.sort((a, b) =>
				a.title.localeCompare(b.title)
			)
		}

		/**
		 * Merge navigation lists
		 */
		if (navigationBarSetting['display-page-list-first'] === true) {
			navigations = pageNavigations.concat(categoryNavigations)
		} else {
			navigations = categoryNavigations.concat(pageNavigations)
		}
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
