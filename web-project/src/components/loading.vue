<template>
	<div class="loading-wrapper" v-show="loading">
		<div class="loading">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			loading: {default: false}
		}
	}
</script>

<style lang="less">
	.loading-wrapper{
		position: relative;
		width: 100%;
		height: 200px;
	}
	.loading{
		position: relative;
		width: 50px;
		height: 50px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		& > div{
			animation-fill-mode: both;
			position: absolute;
			top: 0;
			left: 0;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			border: 2px solid #3a506b;
			animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8);
		}
		& > div:nth-child(1){
			animation-delay: 0s;
		}
		& > div:nth-child(2){
			animation-delay: .2s;
		}
		& > div:nth-child(3){
			animation-delay: .4s;
		}
	}

	@keyframes ball-scale-ripple-multiple {
		0% {
			transform: scale(.1);
			opacity: 1;
		}

		70% {
			transform: scale(1);
			opacity: .7;
		}

		100% {
			opacity: 0;
		}
	}
</style>