import Vue from 'vue'

Vue.mixin({
	methods: {
		resolveImagePath(image) {
			return image

			// try {
			// 	return require(`../static/img/${imageName}`)
			// } catch (e) {
			// 	try {
			// 		return require(`../static/img/${imageName}.svg`)
			// 	} catch (e) {
			// 		try {
			// 			return require(`../static/img/${imageName}.png`)
			// 		} catch (e) {
			// 			try {
			// 				return require(`../static/img/${imageName}.jpg`)
			// 			} catch (e) {
			// 				return image
			// 			}
			// 		}
			// 	}
			// }
		},

		getFileType(fileName) {
			return fileName.split('.').pop()
		}
	}
})
