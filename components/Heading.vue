<template>
	<div class="Heading" id="heading">
		<div class="Icon">
			<div class="IconContainer">
				<nuxt-img
					:lazy="false"
					class="IconImage"
					:src="iconImagePath"
				/>
			</div>
		</div>

		<div class="HeadingDelimiter" />

		<a class="Title skip-link" href="#heading">{{ title }}</a>

		<div class="Info">
			<div class="InfoContainer">
				<div class="InfoRow">
					<div class="AuthorAvatar">
						<div class="AuthorAvatarContainer">
							<nuxt-img
								class="AuthorAvatarImage"
								:src="authorAvatarImagePath"
								:placeholder="true"
							/>
						</div>
					</div>
					<div class="InfoTextContainer">
						<div class="InfoTextRow">
							<div class="AuthorName">
								{{ authorName }}
							</div>
							<div class="Date">{{ date }}</div>
						</div>
						<div class="Description">{{ description }}</div>
						<div class="Tags">
							<nuxt-link
								class="Tag"
								v-for="(tag, index) in postTags"
								:key="index"
								:to="`/${tag}`"
								:title="tag"
							>
								#{{ tag }}
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>

		<divider />
	</div>
</template>

<script>
export default {
	props: {
		authorAvatar: String,
		authorName: String,
		icon: String,
		title: String,
		date: String,
		description: String,
		tags: Array,
	},

	computed: {
		iconImagePath: function () {
			return this.resolveImagePath(this.icon)
		},

		authorAvatarImagePath: function () {
			return this.resolveImagePath(this.authorAvatar)
		},

		postTags: function () {
			if (this.tags) {
				return this.tags.filter((tag) => tag != '')
			}
			return []
		},
	},
}
</script>

<style>
.Heading {
	padding-left: calc(96px + env(safe-area-inset-left));
	padding-right: calc(96px + env(safe-area-inset-right));
	max-width: 100%;
	width: 900px;
}

@media (pointer: coarse) {
	.Heading {
		padding-left: 32px;
		padding-right: 32px;
		max-width: 100%;
		width: 900px;
	}
}

.Icon {
	transition: background 20ms ease-in 0s;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 78px;
	width: 78px;
	border-radius: 3px;
	flex-shrink: 0;
	position: relative;
	z-index: 1;
	margin-left: 3px;
	margin-bottom: 0px;
	align-self: flex-start;
	margin-top: -42px;
}

.IconContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 78px;
	width: 78px;
}

.IconImage {
	position: absolute;
	top: 0px;
	left: 0px;
	opacity: 1;
	width: 78px;
	height: 78px;
	transition: opacity 100ms ease-in 0s;
}

.HeadingDelimiter {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin-top: 8px;
	margin-bottom: 4px;
	margin-left: -1px;
	color: var(--color);
	opacity: 0.4;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
		'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
		'Segoe UI Symbol';
	height: 24px;
}

.Title {
	color: var(--color);
	font-weight: 700;
	line-height: 1.2;
	font-size: 40px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
		'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
		'Segoe UI Symbol';
	text-decoration: none;
	cursor: pointer;
	white-space: pre-wrap;
	word-break: break-word;
}

.Info {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-shrink: 0;
	flex-grow: 0;
}

.InfoContainer {
	max-width: 100%;
	width: 900px;
	margin: 0px auto;
}

.InfoRow {
	padding: 8px 4px 14px;
	display: flex;
	align-items: flex-start;
	position: relative;
	margin-bottom: 6px;
	font-size: 14px;
}

.AuthorAvatar {
	margin-right: 8px;
	margin-top: 2px;
}

.AuthorAvatarContainer {
	background: var(--bg);
	border-radius: 100%;
	box-shadow: rgba(15, 15, 15, 0.1) 0px 2px 4px;
	width: 30px;
	height: 30px;
	margin-top: -5px;
}

.AuthorAvatarImage {
	border-radius: 100%;
	width: 100%;
	height: 100%;
}

.InfoTextContainer {
	flex-grow: 1;
	min-width: 0px;
}

.InfoTextRow {
	display: flex;
	align-items: baseline;
}

.AuthorName {
	font-weight: 600;
}

.Date {
	line-height: 18px;
	margin: 0px 6px;
	border-radius: 3px;
	padding-left: 6px;
	padding-right: 6px;
	font-size: 12px;
	color: var(--color-secondary);
	background: var(--bg-secondary);
}

.Description {
	max-width: 100%;
	width: 100%;
	white-space: pre-wrap;
	word-break: break-word;
}

.Tag {
	font-size: 12px;
	color: var(--color);
	margin: 3px;
}
</style>
