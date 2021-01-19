<template>
	<div class="SideBarContainer">
		<div class="SideBar" :class="this.className">
			<div class="SideBarHeader">
				<top-bar-item
					path="/"
					:title="this.$store.state.WEBSITE_NAME"
					:icon="this.$store.state.LOGO"
					:description="this.$store.state.DESCRIPTION"
				/>
			</div>

			<divider />
			<div class="SideBarBody">
				<top-bar-item
					class="SideBarBodyItem"
					v-for="(navigation, index) in navigations"
					:key="index"
					:path="navigation.path"
					:title="navigation.title"
					:icon="navigation.icon"
					:description="navigation.description"
				/>
			</div>
		</div>

		<div
			class="SideBarPlaceHolder"
			v-show="this.$store.state.showSideBar == true"
			v-on:click="onClickSideBarPlaceHolder"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			className: 'SideBarClose',
		}
	},

	created() {
		if (this.$store.state.showSideBar == true) {
			this.$store.dispatch('toggleSideBar')
		}
	},

	computed: {
		navigations() {
			return this.$store.state.navigations
		},

		showSideBar() {
			return this.$store.state.showSideBar
		},
	},

	watch: {
		showSideBar() {
			if (this.showSideBar == true) {
				this.className = 'SideBarOpen'
			} else {
				this.className = 'SideBarClose'
			}
		},
	},

	methods: {
		onClickSideBarPlaceHolder(event) {
			if (this.$store.state.showSideBar == true) {
				this.$store.dispatch('toggleSideBar')
			}
		},
	},
}
</script>

<style>
.SideBarContainer {
	z-index: 10;
	position: fixed;
	display: flex;
	height: 100%;
}

.SideBarPlaceHolder {
	width: 100vh;
}

.SideBar {
	display: flex;
	flex-direction: column;
	max-width: 75vw;
	height: 100%;
	background: var(--bg);
	will-change: transform;
	color: var(--color);
	margin-left: auto;
	cursor: pointer;
}

.SideBarOpen {
	display: block;
	height: 100vh;
	position: fixed;
	top: 0px;
	right: 100%;
	transition: transform 200ms ease 0s;
	transform: translateZ(0px) translateX(100%);
	box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
		rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
}

.SideBarClose {
	display: block;
	height: 100vh;
	position: fixed;
	top: 0px;
	right: 100%;
	transition: transform 200ms ease 0s;
	transform: translateZ(0px) translateX(0px);
	box-shadow: none;
}

.SideBarHeader {
	background: var(--bg);
	display: flex;
	align-items: center;
	height: 45px;
}

.SideBarBody {
	height: calc(100vh - 45px - 20px);
	display: flex;
	flex-direction: column;
	overflow: hidden auto;
	will-change: scroll-position;
	scrollbar-width: thin;
}

.SideBarBodyItem {
	margin-top: 10px;
	width: max-content;
	max-width: 75vw;
	width: 100%;
}
</style>