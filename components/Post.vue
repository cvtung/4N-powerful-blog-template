<template>
	<div class="Post">
		<nuxt-link class="PostContainer" :to="path" :title="title">
			<div class="PostInfoContainer">
				<div class="PostTitleContainer">
					<div class="PostIcon">
						<nuxt-image
							class="PostIconImage"
							:src="iconImagePath"
						/>
					</div>
					{{ title }}
				</div>

				<div class="PostDate">{{ date }}</div>
				<div class="PostDescription">
					{{ description }}
				</div>
			</div>

			<div class="PostJumbotron">
				<nuxt-image
					class="PostJumbotronImage"
					:src="jumbotronImagePath"
				/>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		path: String,
		title: String,
		description: String,
		icon: String,
		jumbotron: String,
		date: String,
	},

	computed: {
		iconImagePath: function () {
			return this.resolveImagePath(this.icon)
		},
		jumbotronImagePath: function () {
			return this.resolveImagePath(this.jumbotron)
		},
	},
}
</script>

<style>
.Post {
	width: 100%;
	max-width: 100%;
	margin-bottom: 20px;
	display: flex;
}
.Post:hover {
	background: rgb(55, 53, 47, 0.08) none repeat scroll 0% 0%;
}

.PostContainer {
	text-decoration: none;
	min-height: 150px;
	width: 100%;
	display: flex;
	overflow: hidden;
	border: 1px solid rgba(55, 53, 47, 0.16);
	border-radius: 3px;
	color: inherit;
}

.PostInfoContainer {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	text-align: left;
}

.PostIcon {
	height: 40px;
	width: 40px;
	float: left;
	border-radius: 3px;
	margin-right: 5px;
	margin-top: 5px;
}

.PostIconImage {
	height: 100%;
	width: 100%;
}

.PostDate {
	display: inline-flex;
	align-items: center;
	border-radius: 3px;
	padding-left: 6px;
	padding-right: 6px;
	font-size: 12px;
	color: rgba(55, 53, 47, 0.6);
	background: rgba(233, 168, 0, 0.2);
}

.PostDescription {
	font-size: 12px;
	color: rgba(55, 53, 47, 0.6);
	margin-top: 5px;
}

.PostJumbotron {
	flex: 1 1 180px;
}

.PostJumbotronImage {
	display: block;
	object-fit: cover;
	border-radius: 1px;
	width: 100%;
	height: 100%;
}
</style>
