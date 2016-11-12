<template>
	<div class="home">
		<home-banner></home-banner>
		<div class="container">
			<loading :loading="loading"></loading>
			<section class="top-four-container">
				<div class="top-article-item" v-for="item of topArticles">
					<div class="article-index-img">
						<a v-link="{name: 'article-detail', params: {id: item._id}}" class="index-article-link"><img :src="'/api/img/' + item.index_img" alt="" width="300" height="200"></a>	</div>
					<h2><a v-link="{name: 'article-detail', params: {id: item._id}}">{{item.title}}</a></h2>
				</div>
			</section>
			<section class="more-article"><button v-link="{path: '/article'}">更多</button></section>
		</div>
		<section class="middle-tips">
			<div class="left-side-pic"></div>
			<div class="wow fadeInDownCustom right-side-text" data-wow-offset="200"><span>专注前端，会一点后端，会一点设计，热衷于一切美好的事物。</span></div>
		</section>
		<section class="responsive">
			<h2 class="index-title">采用响应式设计</h2>
			<device-model></device-model>
		</section>
		<section class="stack-wrapper">
			<h2 class="index-title">由以下技术驱动</h2>
			<section class="stack-box container">
				<div class="stack-item"><img src="../static/images/nodejs.png" alt=""></div>
				<div class="stack-item"><img src="../static/images/mongodb.png" alt=""></div>
				<div class="stack-item"><img src="../static/images/vue.png" alt=""></div>
			</section>
		</section>
	</div>
</template>

<script>
	import homeBanner from '../components/home-banner.vue'
	import deviceModel from '../components/device-model.vue'
	import loading from '../components/loading.vue'

	export default {
		data() {
			return {
				msg: '',
				topArticles: [],
				loading: false
			}
		},
		route: {
			data(transition) {
				this.$parent.isFront = true
				this.loading = true
				this.$http.get('/api/article/getIndexArticles').then((response) => {
					let res = response.json()
					this.topArticles = res.data
					this.loading = false
				})
			}
		},
		components: {
			homeBanner,
			loading,
			deviceModel
		}
	}
</script>

<style lang="less">
	.top-four-container{
		padding-top: 65px;
		width: 100%;
		overflow: hidden;
		.top-article-item{
			position: relative;
			z-index: 2;
			overflow: hidden;
			box-sizing: border-box;
			margin: 0 15px 30px;
			background-color: #fff;
			float: left;
			width: ~"calc(25% - 30px)";
			width: ~"-webkit-calc(25% - 30px)";
			transition: all .3s ease;
			&:hover{
				box-shadow: 0px 0px 15px #ccc;
			}
			.article-index-img{
				overflow: hidden;
				background-color: #aaa;
				.index-article-link{
					display: block;
					padding-top: 67%;
					position: relative;
				}
				.index-article-link img{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			h2{
				height: 50px;
				font-size: 16px;
				font-weight: normal;
				padding: 0 20px;
				text-align: center;
				a{
					display: inline-block;
					overflow: hidden;
					box-sizing: border-box;
					width: 100%;
					height: 50px;
					color: #1f2430;
					vertical-align: top;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: 50px;
				}
			}
		}
	}

	.more-article{
		width: 100%;
		margin-top: 45px;
		text-align: center;
		button{
			width: 150px;
			height: 30px;
			background-color: #3a506b;
			color: #fcfcfc;
			font-size: 14px;
			border: 0;
			box-shadow: 0px 4px 0px #273549;
			&:hover{
				background-color: #4a6587;
			}
			&:active{
				transform: translateY(4px);
				box-shadow: 0px 0px 0px rgba(0,0,0,0);
			}
		}
	}

	.middle-tips{
		display: flex;
		margin-top: 75px;
		width: 100%;
		height: 200px;
		overflow: hidden;
		background-color: #273549;
		div{
			flex: 1;
		}
		div.left-side-pic{
			position: relative;
			background: url(../static/images/home-banner.jpg) no-repeat #1f2430;
			background-position: center center;
			background-size: cover;
			&::after{
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 200px;
				background-color: rgba(39,53,73,.5);
			}
		}
		div.right-side-text{
			text-align: center;
			line-height: 200px;
			font-size: 18px;
			color: #fcfcfc;
		}
	}

	.index-title{
		font-size: 24px;
		color: #1f2430;
		font-weight: normal;
		text-align: center;
		line-height: 1.5;
		margin: 40px 0;
	}

	.responsive{
		width: 100%;
		padding: 60px 0 120px;
		overflow: hidden;
	}
	.stack-wrapper{
		background-color: #fff;
		padding: 20px 0 40px;
		margin-bottom: 20px;
		box-shadow: inset 0px 5px 12px -5px rgba(0,0,0,.4),
					inset 0px -5px 12px -5px rgba(0,0,0,.4);
		.stack-box{
			width: 100%;
			overflow: hidden;
			.stack-item{
				float: left;
				width: ~"calc(33.3333%)";
				width: ~"-webkit-calc(33.3333%)";
				text-align: center;
				img{
					display: inline-block;
					// width: 100%;
					// height: auto;
				}
			}
		}
	}
	
	@media all and (max-width: 1150px) {
		.middle-tips div.right-side-text{
			font-size: 14px;
		}
 	}

	@media all and (max-width: 950px) {
		.top-four-container .top-article-item{
			width: ~"calc(50% - 30px)";
			width: ~"-webkit-calc(50% - 30px)";
		}
		.middle-tips{
			display: block;
			position: relative;
			div{
				width: 100%;
				height: 100%;
			}
			div.right-side-text{
				position: absolute;
				top: 0;
				left: 0;
				background-color: transparent;
				font-size: 18px;
			}
		}
		.stack-wrapper .stack-box .stack-item img{
			height: 60px;
			width: auto;
		}
	}
	@media all and (max-width: 650px) {
		.top-four-container .top-article-item{
			width: 100%;
			margin: 0 0 30px
		}
		.middle-tips div.right-side-text{
			box-sizing: border-box;
			padding: 0 20px;
			display: table;
			line-height: 26px;
			font-size: 14px;
			word-wrap: break-word;
			span{
				display: table-cell;
				vertical-align: middle;
			}
		}
		.stack-wrapper .stack-box .stack-item{
			width: 100%;
			margin-bottom: 20px;
		}
	}
</style>