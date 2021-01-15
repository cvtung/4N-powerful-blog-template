<template>
	<div>
		<side-bar />
		<top-bar />
		<main-content
			:jumbotron="this.jumbotron"
			:authorAvatar="this.authorAvatar"
			:authorName="this.authorName"
			:title="this.title"
			:icon="this.icon"
			:date="this.date"
			:description="this.description"
		>
			<!-- Display single page content -->
			<div v-if="this.body.length">
				<markdown-content :content="this.body" />
				<footing
					:title="this.title"
					:description="this.description"
					:authorName="this.authorName"
				/>
			</div>

			<!-- Display list of posts in category -->
			<!-- @see  https://stackoverflow.com/a/61375490/3893936-->
			<!-- <client-only v-else> -->
			<component
				v-for="(post, index) in postList"
				:is="post"
				:key="index"
			/>
			<!-- </client-only> -->
		</main-content>
	</div>
</template>

<script>
import Post from '~/components/Post'

export default {
	data() {
		return {
			jumbotron: '',
			authorAvatar: '',
			authorName: '',
			title: '',
			icon: '',
			date: '',
			description: '',
			body: '',
			postList: [],
		}
	},

	beforeMount() {
		try {
			let page = require(`~/content/pages/${this.slug}.json`)
			console.log('page', page)

			this.jumbotron = page.jumbotron
			this.authorAvatar = page.authorAvatar
			this.authorName = page.authorName
			this.title = page.title
			this.icon = page.icon
			this.date = page.date
			this.description = page.description
			this.body = page.body
			this.postList = []
		} catch (e) {
			let category = require(`~/content/categories/${this.slug}.json`)
			console.log('category', category)

			this.jumbotron = category.jumbotron
			this.authorAvatar = ''
			this.authorName = ''
			this.title = category.title
			this.icon = category.icon
			this.date = ''
			this.description = category.description
			this.body = ''

			let posts = this.$store.state.posts[this.slug]

			posts.forEach((post) => {
				let categorySlug = this.slug
				/**
				 * @see https://forum.vuejs.org/t/how-to-add-or-remove-vue-js-component-dynamically-programmatically-or-on-the-fly/32356/3
				 * @tutorial https://jsfiddle.net/jamesbrndwgn/ku7m1dp0/9/
				 */
				const postComponent = {
					render(component) {
						return component(Post, {
							props: {
								path: '/' + categorySlug + '/' + post.slug,
								title: post.title,
								description: post.description,
								icon: post.icon,
								jumbotron: post.jumbotron,
								date: post.date,
							},
						})
					},
				}
				this.postList.push(postComponent)
			}, this)
		}
	},

	async asyncData({ params }) {
		const slug = params.slug
		return {
			slug,
		}
	},

	head() {
		return {
			title: this.title,
		}
	},
}
</script>
