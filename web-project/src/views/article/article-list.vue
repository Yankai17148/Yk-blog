<template>
	<div>
		<div class="container article-wrapper">
			<div class="article-item" v-for="article in list">
				<div class="article-cover-img" v-if="article.index_img != ''"><img :src="'/api/img/' + article.index_img" alt=""></div>
				<div class="article-text-detail" :class="{'full-width': (article.index_img == '')}">
					<h4 class="article-title"><a v-link="{name: 'article-detail', params: {id: article._id}}">{{article.title}}</a></h4>
					<span class="article-time">发表于 {{article.create_time | formateDate}}</span>
					<div v-html="article.cut_html.html" class="markdown-wrapper"></div>
				</div>
			</div>
			<loading :loading="loading"></loading>
			<button class="get-article-button" v-show="!loading" @click="getMoreArticle">加载更多</button>
		</div>
	</div>
</template>

<script>
	import loading from '../../components/loading.vue'

	export default {
		data() {
			return {
				list: [],
				currentPage: 1,
				loading: false
			}
		},
		created() {
			this.getArticleList()
		},
		methods: {
			getArticleList() {
				let that = this
				this.loading = true
				this.$http.get('/api/article/getarticlelist?currentPage=' + this.currentPage + '&itemsPerPage=5').then((response) => {
					let res = response.json()
					that.list = that.list.concat(res.data)
					that.loading = false
				})
			},
			getMoreArticle() {
				this.currentPage++
				this.getArticleList()
			}
		},
		components: {
			loading
		}
	}
</script>

<style lang="less">
	.article-wrapper{
		box-sizing: border-box;
		padding-bottom: 40px;
	}
	.article-item{
		padding: 30px 10px;
		border-bottom: 1px solid #d4d4d4;
		overflow: hidden;
		.article-cover-img{
			float: left;
			margin-right: 40px;
			img{
				width: 230px;
				height: auto;
			}
		}
		.article-text-detail{
			padding-left: 270px;
			&.full-width{
				padding-left: 0;
			}
			.article-title{
				font-size: 28px;
				line-height: 36px;
				font-weight: normal;
				margin-bottom: 10px;
				a{
					display: inline-block;
					position: relative;
					color: #1f2430;
					transition: all .3s;
					&::after{
						content: '';
						position: absolute;
						width: 100%;
						height: 2px;
						bottom: 0;
						left: 0;
						background-color: #1f2430;
						visibility: hidden;
						transform: scaleX(0);
						transition: all .2s;
					}
					&:hover::after{
						visibility: visible;
						transform: scaleX(1);
					}
				}
			}
			.article-time{
				display: block;
				font-family: Georgia;
				font-size: 12px;
				color: #999;
				margin-bottom: 10px;
			}
		}
	}
	.get-article-button{
		display: block;
		margin-top: 30px;
		width: 100%;
		height: 48px;
		background-color: #ebebeb;
		border: 0;
		color: #999;
		font-size: 16px;
		transition: all .3s;
		&:hover{
			background-color: #cfcfcf;
			color: #666;
		}
	}

	@media all and (max-width: 950px) {
		.article-cover-img{
			display: none;
		}
		.article-item .article-text-detail{
			padding-left: 0;
			.article-title, .article-time{
				text-align: center;
			}
		}

	}
</style>