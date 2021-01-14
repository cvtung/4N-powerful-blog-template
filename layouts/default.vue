<template>
	<div class="container">
		<nuxt />
	</div>
</template>

<style>
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
	color: #37352f;
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
	background: #fff none repeat scroll 0 0;
	z-index: 1;
	height: 100vh;
	max-height: 100%;
}
</style>
