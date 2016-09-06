<template>
	<footer v-show="isFront">
		<div class="container">
			<nav class="sns-list">
				<a href="{{snsLink.github}}" class="sns-link" target="_blank"><i class="icon-gayhub"></i></a>
				<a href="{{snsLink.weibo}}" class="sns-link" target="_blank"><i class="icon-sina"></i></a>
				<a href="{{snsLink.zhihu}}" class="sns-link" target="_blank"><i class="icon-zhihu"></i></a>
				<a href="{{snsLink.oldBlog}}" class="sns-link" target="_blank"><i class="icon-book"></i></a>
				
			</nav>
		</div>
	</footer>
</template>

<script>
	export default {
		props: {
			isFront: {default: true}
		},
		data() {
			return {
				snsLink: {
					'github': 'https://github.com/Yankai17148',
					'weibo': 'http://weibo.com/1608580297/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1',
					'zhihu': 'https://www.zhihu.com/people/yan-kai-3',
					'oldBlog': 'http://blog.yankaiweb.com'
				}
			}
		}
	}
</script>

<style lang="less">
	footer{
		position: absolute;
		width: 100%;
		height: 320px;
		left: 0;
		background: url(../static/images/footer-cover.jpg) no-repeat center center #3a506b;
		background-size: cover;
		&::after{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 320px;
			background-color: rgba(39,53,73,.6);
			z-index: 1;
		}
		nav{
			position: relative;
			height: 320px;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 2;
			.sns-link{
				display: inline-block;
				margin: 0 50px;
				font-size: 50px;
				color: #fff;
				transition: all .3s;
				&:hover{
					transform: translateY(-10px);
				}
				i{
					&.icon-book{
						font-size: 38px;
					}
					transition: all .3s;
					&.icon-gayhub:hover{
						color: #707070;
					}
					&.icon-sina:hover{
						color: #ff334b;
					}
					&.icon-book:hover{
						color: #00c859;
					}
					&.icon-zhihu:hover{
						color: #00a0e9;
					}
				}
			}
		}
	}
	@media all and (max-width: 650px) {
		footer{
			overflow: hidden;
			nav .sns-link{
				margin: 0 15px;
				font-size: 42px;
				i.icon-book{
					font-size: 34px;
				}
			}
		}
	}
</style>