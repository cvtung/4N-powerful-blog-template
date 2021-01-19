<template>
	<div class="container">
		<nuxt />
	</div>
</template>

<style>
:root {
	--color: #37352f;
	--color-secondary: rgba(55, 53, 47, 0.6);
	--bg: #ffffff;
	--bg-secondary: rgba(100, 200, 255, 0.3);
	--bg-hover: rgba(55, 53, 47, 0.08);
}

.dark-mode {
	--color: #ebf4f1;
	--color-secondary: rgba(235, 244, 241, 0.6);
	--bg: #091a28;
	--bg-secondary: rgba(0, 0, 0, 0.76);
	--bg-hover: rgba(235, 244, 241, 0.08);
}

.sepia-mode {
	--color: #433422;
	--color-secondary: rgba(67, 52, 34, 0.6);
	--bg: #f1e7d0;
	--bg-secondary: rgba(255, 179, 0, 0.4);
	--bg-hover: rgba(67, 52, 34, 0.08);
}

html {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
		'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
		'Segoe UI Symbol';
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	overflow: hidden;
}

body {
	height: 100vh;
	overflow: hidden;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

* {
	box-sizing: border-box;
	font-display: optional;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*,
:focus {
	outline: 0;
}

.container {
	color: var(--color);
	fill: currentcolor;
	line-height: 1.5;
	width: 100vw;
	position: relative;
	flex: 1 1 0;
	cursor: text;
	flex-grow: 1;
	flex-shrink: 1;
	display: flex;
	flex-direction: column;
	background: var(--bg);
	z-index: 1;
	height: 100vh;
	max-height: 100%;
}
</style>
