<template>
	<div class="TopBar">
		<div class="TopBarContainer">
			<hamburger v-show="this.showFull == false" />

			<div ref="BlogName">
				<top-bar-item
					path="/"
					:title="this.$store.state.WEBSITE_NAME"
					:icon="this.$store.state.LOGO"
					:description="this.$store.state.DESCRIPTION"
				/>
			</div>

			<div class="TopBarDelimiter" v-show="this.showFull"></div>

			<div :class="this.topBarItemListClassName" ref="TopBarItemList">
				<top-bar-item
					v-for="(navigation, index) in navigations"
					:key="index"
					:path="navigation.path"
					:title="navigation.title"
					:icon="navigation.icon"
					:description="navigation.description"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showFull: true,
			windowWidth: 0,
			topBarItemListClassName: 'TopBarItemList',
		}
	},

	created() {
		if (process.browser) {
			this.windowWidth = window.innerWidth
		}
	},

	computed: {
		navigations() {
			return this.$store.state.navigations
		},
	},

	watch: {
		windowWidth(newValue, oldValue) {
			let topBarItemListWidth = this.$refs.TopBarItemList.clientWidth
			let blogNameWidth = this.$refs.BlogName.clientWidth

			if (
				topBarItemListWidth > 0 &&
				topBarItemListWidth > this.windowWidth - blogNameWidth - 50
			) {
				this.showFull = false
			} else {
				this.showFull = true
			}

			if (this.showFull == true) {
				this.topBarItemListClassName = 'TopBarItemList'
			} else {
				this.topBarItemListClassName = 'TopBarItemListHidden'
			}
		},
	},

	mounted() {
		window.onresize = () => {
			this.windowWidth = window.innerWidth
		}
	},
}
</script>

<style>
.TopBar {
	width: 100%;
	max-width: 100vw;
	height: 45px;
	background: whitesmoke;
	position: relative;
}

.TopBarContainer {
	display: flex;
	align-items: center;
	height: 45px;
}

.TopBarDelimiter {
	flex-grow: 1;
	flex-shrink: 1;
}

.TopBarItemList {
	opacity: 1;
}

.TopBarItemListHidden {
	opacity: 0;
}
</style>
