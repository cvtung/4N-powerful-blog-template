<template>
	<div class="MainContent">
		<jumbotron :image="jumbotronImage" />
		<heading
			:authorAvatar="authorAvatarImage"
			:authorName="authorNameData"
			:title="title"
			:icon="iconImage"
			:date="date"
			:description="description"
		/>

		<spacer />

		<div class="Content">
			<slot></slot>
		</div>

		&nbsp;
	</div>
</template>

<script>
export default {
	props: {
		jumbotron: String,
		authorAvatar: String,
		authorName: String,
		title: String,
		icon: String,
		date: String,
		description: String,
	},

	computed: {
		jumbotronImage: function () {
			if (!this.jumbotron) {
				return this.$store.state.JUMBOTRON
			}
			return this.jumbotron
		},

		authorAvatarImage: function () {
			if (!this.authorAvatar) {
				return this.$store.state.AUTHOR_AVATAR
			}
			return this.authorAvatar
		},

		authorNameData: function () {
			if (!this.authorName) {
				return this.$store.state.AUTHOR_NAME
			}
			return this.authorName
		},

		iconImage: function () {
			if (!this.icon) {
				return this.$store.state.LOGO
			}
			return this.icon
		},
	},

	head() {
		let imagePath = this.resolveImagePath(this.iconImage)
		let imageType = this.getFileType(imagePath)
		return {
			title: this.title,
			link: [
				{
					hid: 'icon',
					rel: 'icon',
					type: 'image/' + imageType,
					href: imagePath,
				},
			],
		}
	},
}
</script>

<style>
.MainContent {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 45px);
	overflow: auto;
}

.Content {
	padding-left: calc(96px + env(safe-area-inset-left));
	padding-right: calc(96px + env(safe-area-inset-right));
	max-width: 100%;
	width: 900px;
	margin-bottom: 200px;
}

@media (pointer: coarse) {
	.Content {
		padding-left: 32px;
		padding-right: 32px;
		max-width: 100%;
		width: 900px;
		margin-bottom: 200px;
	}
}
</style>
