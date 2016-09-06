<template>
	<div class="counter">
		<h2 class="count">{{count}}</h2>
		<button @click="clickAlert">Increment</button>
	</div>
</template>

<style lang="less">
	.counter{
		max-width:600px;
		margin: 100px auto;
		text-align: center;
		& .count{
			font-size: 4rem;
			color:#0180cf;
		}
		button{
			border:0;
			background-color: #0180cf;
			color:#fff;
			padding:5px 12px;
			cursor: pointer;
			transition: all .3s;
			border-radius:4px;
			&:hover{
				background-color: #0070bd;
			}
		}
	}
</style>

<script>
	export default {
		data() {
			return {
				msg: 'sucker'
			}
		},
		methods: {
			clickAlert: function() {
				console.log('you click it!! ' + this.msg + '!')
			}
		}
	}
</script>