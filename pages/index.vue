<template>
	<div>
		<side-bar />
		<top-bar />
		<main-content :title="this.title">
			<markdown-content :content="this.body" />
		</main-content>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			body: '',
		}
	},
	head() {
		return {
			title: this.title,
			script: [
				{
					src:
						'https://identity.netlify.com/v1/netlify-identity-widget.js',
				},
			],
		}
	},

	beforeMount() {
		try {
			let indexPage = require(`~/content/pages/index.json`)

			this.title = this.$store.state.WEBSITE_NAME
			this.body = indexPage.body
		} catch (e) {
			this.body = 'Something wrong: ' + e.message
		}
	},
}
</script>

<style>
</style>
