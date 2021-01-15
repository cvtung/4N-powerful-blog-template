<template>
	<div class="Footing">
		<divider />
		<spacer />
		<share-buttons
			:title="this.title"
			:description="this.description"
			:authorName="this.authorName"
		/>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		description: String,
		authorName: String,
	},
}
</script>

<style>
.Footing {
	margin-top: 100px;
	max-width: 100%;
	width: 900px;
}
</style>