/**
 * Fix error "window is undefined" for markdown-it-vue
 * https://github.com/ravenq/markdown-it-vue/issues/8
 */

import Vue from 'vue'

import MarkdownItVueMinify from 'markdown-it-vue-minify/dist/markdown-it-vue-minify.umd.min.js'
import 'markdown-it-vue-minify/dist/markdown-it-vue-minify.css'

Vue.use(MarkdownItVueMinify)
