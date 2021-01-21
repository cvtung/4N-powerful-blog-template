<template>
	<div class="ColorMode" v-on:click="toggleColorMode">
		<client-only>
			<component :is="`color-mode-${this.currentColor}`" />
		</client-only>
	</div>
</template>

<script>
import ColorModeDark from '~/assets/icons/color-mode-dark.svg?inline'
import ColorModeLight from '~/assets/icons/color-mode-light.svg?inline'
import ColorModeSepia from '~/assets/icons/color-mode-sepia.svg?inline'
import ColorModeSystem from '~/assets/icons/color-mode-system.svg?inline'

export default {
	components: {
		ColorModeDark,
		ColorModeLight,
		ColorModeSepia,
		ColorModeSystem,
	},

	data() {
		return {
			currentColor: this.$colorMode.preference,
			colors: ['light', 'dark', 'sepia'],
		}
	},

	beforeMount() {
		let color = localStorage.getItem('nuxt-color-mode')
		if (color) {
			this.currentColor = color
		} else {
			this.currentColor = 'system'
		}
		this.$colorMode.preference = this.currentColor
	},

	methods: {
		toggleColorMode(event) {
			let index = this.colors.indexOf(this.currentColor)
			let nextColorIndex = (index + 1) % this.colors.length
			this.currentColor = this.colors[nextColorIndex]

			this.$colorMode.preference = this.currentColor
		},
	},
}
</script>

<style scoped>
.ColorMode {
	padding: 5px;
	cursor: pointer;
	align-items: center;
	display: inline-flex;
	color: var(--color);
	background-color: var(--bg);
	border-radius: 3px;
	transition: all 0.1s ease;
}

.ColorMode:hover {
	background: var(--bg-hover);
}
</style>