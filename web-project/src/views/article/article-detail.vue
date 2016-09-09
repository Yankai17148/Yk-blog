<template>
	<div>
		<loading :loading="loading"></loading>
		<div class="container article-detail">
			<h1 class="detail-title">{{article.title}}</h1>
			<span class="detail-create-time">发表于 {{article.create_time | formateDate}}</span>
			<article class="detail-content markdown-wrapper" v-html="article.content_html"></article>
			<span class="update-time" v-if="article.update_time !== article.create_time">编辑于 {{article.update_time | formateDate}}</span>
		</div>
	</div>
</template>

<script>
	import loading from '../../components/loading.vue'

	export default {
		data() {
			return {
				article: {},
				loading: false
			}
		},
		route: {
			data(transition) {
				let id = transition.to.params.id

				this.$http.get('/api/article/' + id + '/getArticle').then((response) => {
					let res = response.json()
					this.article = res.data
				})
			}
		},
		components: {
			loading
		}
	}
</script>

<style lang="less">
	.article-detail{
		padding-top: 40px;
		margin-bottom: 100px;
		.detail-title{
			font-weight: normal;
			font-size: 26px;
			text-align: center;
			margin: 20px 0;
		}
		.detail-create-time{
			display: block;
			font-family: Georgia;
			text-align: center;
			font-size: 14px;
			color: #999;
			margin-bottom: 40px;
		}
		.detail-content{}
		.update-time{
			display: block;
			text-align: right;
			margin-top: 40px;
			font-size: 16px;
			color: #999;
			font-style: italic;
			font-family: Georgia;
		}
	}
</style>