<template>
	<div class="Jumbotron">
		<nuxt-image
			class="JumbotronImage"
			:src="imagePath"
			:placeholder="true"
			width="100%"
			height="30vh"
		/>
	</div>
</template>

<script>
export default {
	props: {
		image: String,
	},

	computed: {
		imagePath: function () {
			return this.resolveImagePath(this.image)
		},
	},
}
</script>

<style>
.Jumbotron {
	height: 30vh;
	width: 100%;
}

.JumbotronImage {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
