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

.markdown-body {
	color: var(--color);
}

.markdown-body img {
	background-color: unset;
}

.dark-mode .markdown-body table {
	color: #37352f;
}

.markdown-body hr {
	background-color: var(--bg-hover);
}

.markdown-body h1,
.markdown-body h2 {
	border-bottom: 2px solid var(--bg-hover);
}

.markdown-body blockquote {
	border-left: 0.25em solid #6a737d;
}
</style>