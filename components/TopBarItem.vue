<template>
	<nuxt-link
		class="TopBarItem"
		:to="path"
		:title="description"
		@click.native="onClickButton"
	>
		<div class="TopBarItemContainer">
			<div class="TopBarItemIcon">
				<nuxt-image
					:lazy="false"
					class="TopBarItemImage"
					:src="iconImagePath"
				/>
			</div>
			<div class="TopBarItemTitle">{{ title }}</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		path: String,
		title: String,
		icon: String,
		description: String,
	},

	computed: {
		iconImagePath: function () {
			return this.resolveImagePath(this.icon)
		},
	},

	methods: {
		onClickButton(event) {
			if (this.$store.state.showSideBar == true) {
				this.$store.dispatch('toggleSideBar')
			}
		},
	},
}
</script>

<style>
.TopBarItem {
	user-select: none;
	transition: background 20ms ease-in 0s;
	display: inline-flex;
	align-items: center;
	flex-shrink: 1;
	white-space: nowrap;
	height: 32px;
	border-radius: 3px;
	font-size: 14px;
	line-height: 1.5;
	min-width: 0px;
	padding-left: 6px;
	padding-right: 6px;
	color: var(--color);
	font-weight: normal;
	text-decoration: none;
}

.TopBarItemContainer {
	user-select: none;
	transition: background 20ms ease-in 0s;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	flex-shrink: 0;
	white-space: nowrap;
	height: 32px;
	width: 100%;
	border-radius: 3px;
	font-size: 14px;
	min-width: 0px;
	padding-left: 8px;
	padding-right: 8px;
	color: var(--color);
}

.TopBarItemContainer:hover {
	background: var(--bg-hover);
}

.TopBarItemIcon {
	user-select: none;
	transition: background 20ms ease-in 0s;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20px;
	width: 20px;
	border-radius: 3px;
	flex-shrink: 0;
	margin-right: 6px;
}

.TopBarItemImage {
	display: block;
	object-fit: cover;
	border-radius: 3px;
	width: 100%;
	height: 100%;
	transition: opacity 100ms ease-out 0s;
}

.TopBarItemTitle {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 240px;
}
</style>

