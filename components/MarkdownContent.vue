<template>
	<main>
		<markdown-it-vue
			class="md-body"
			:content="this.content"
			:options="options"
		/>
	</main>
</template>

<script>
export default {
	props: {
		content: String,
	},
	data() {
		return {
			options: {
				markdownIt: {
					typographer: true,
					linkify: true,
					breaks: true,
				},
				linkAttributes: {
					attrs: {
						target: '_blank',
						rel: 'noopener',
					},
				},
				katex: {
					throwOnError: false,
					errorColor: '#cc0000',
				},
				githubToc: {
					tocFirstLevel: 2,
					tocLastLevel: 3,
					tocClassName: 'toc',
					anchorLinkSymbol: '',
					anchorLinkSpace: false,
					anchorClassName: 'anchor',
					anchorLinkSymbolClassName: 'octicon octicon-link',
				},
			},
		}
	},
}
</script>

<style>
.el-image-viewer__wrapper {
	cursor: default;
}
</style>