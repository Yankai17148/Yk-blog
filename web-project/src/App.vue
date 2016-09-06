<template>
	<div id="app">
		<app-header :is-front="isFront"></app-header>
		<router-view transition="bounce" transition-mode="out-in"></router-view>
		<app-footer :is-front="isFront"></app-footer>
	</div>
</template>

<style>
	
</style>

<script>
	import appHeader from './components/header.vue'
	import appFooter from './components/footer.vue'

	export default {
		data() {
			return {
				isFront: true
			}
		},
		components: {
			appHeader,
			appFooter
		}
	}
</script>