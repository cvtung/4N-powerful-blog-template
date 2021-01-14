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
			<!-- Display post content -->
			<markdown-content :content="this.body" />
			<footing />
		</main-content>
	</div>
</template>

<script>
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
			post: '',
		}
	},

	beforeMount() {
		try {
			if (!this.post) {
				this.post = require(`~/content/posts/${this.slug}.json`)
			}
			let post = this.post
			console.log('post', post)

			this.jumbotron = post.jumbotron
			this.authorAvatar = post.authorAvatar
			this.authorName = post.authorName
			this.title = post.title
			this.icon = post.icon
			this.date = post.date
			this.description = post.description
			this.body = post.body
		} catch (e) {
			this.body = 'Something wrong: ' + e.message
		}
	},
	async asyncData({ params, payload }) {
		const category = params.category
		const slug = params.slug

		return { category, slug }
		if (payload) return { category, slug, post: payload }
		else
			return {
				category,
				slug,
				post: await require(`~/content/posts/${slug}.json`),
			}
	},

	head() {
		return {
			title: this.title,
		}
	},
}
</script>
