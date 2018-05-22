<template>
	<section class="home-banner">
		<section class="typeing-text">
			<div class="content" @click="tongji"></div>
			<span class="dash"></span>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				text: 'Thoughts, stories and ideas.',
				index: 0,
				chars: 0,
				speed: 100,
				container: '.typeing-text .content'
			}
		},
		ready() {
			this.textInit()
		},
		methods: {
			textInit() {
				this.chars = this.text.length
				this.write()
			},
			write() {
				let that = this
				$(this.container).append(this.text[this.index])
				if (this.index < this.chars) {
					this.index++
					setTimeout(() => {that.write()}, that.speed)
				}
			},
			// 百度统计的设置
			tongji() {
				_hmt.push(['_trackEvent', 'bannertext', 'click', 'bannertext']);
				console.log('you clicked it!');
			}
		}
	}
</script>

<style lang="less">
	.home-banner{
		position: relative;
		width:100%;
		height:450px;
		background: url(../static/images/home-cover.jpg) no-repeat center center #3a506b;
		background-size: cover;
		&::after{
			content: '';
			position: absolute;
			width:100%;
			height:450px;
			background-color: rgba(1,1,1,.4);
		}
	}
	.typeing-text{
		position: absolute;
		top: 280px;
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 24px;
		z-index: 99;
		vertical-align: text-bottom;
		.content{
			font-family: Verdana;
			display: inline;
		}
		.dash{
			display: inline-block;
			height: 3px;
			width: 10px;
			background-color: #3498db;
			animation: blink 1s infinite linear;
		}
	}

	@media all and (max-width: 1200px) {
		.typeing-text{
			top: 50%;
			font-size: 18px;
		}
	}
	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>