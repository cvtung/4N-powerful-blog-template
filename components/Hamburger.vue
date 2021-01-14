<template>
	<div
		class="HamburgerIcon"
		role="button"
		tabindex="0"
		aria-label="hamburgerButton"
		v-on:click="onClickButton"
	>
		<svg viewBox="0 0 14 14">
			<path
				d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"
			></path>
		</svg>
	</div>
</template>

<script>
export default {
	methods: {
		onClickButton(event) {
			this.$store.dispatch('toggleSideBar')
		},
	},
}
</script>

<style>
.HamburgerIcon {
	user-select: none;
	transition: background 20ms ease-in 0s;
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	height: 100%;
	width: 32px;
	margin-left: 4px;
}

.HamburgerIcon > svg {
	width: 18px;
	height: 18px;
	display: block;
	fill: inherit;
	flex-shrink: 0;
	backface-visibility: hidden;
}
</style>