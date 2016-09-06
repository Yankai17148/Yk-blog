<template>
	<div>
		<section class="article-header"></section>
		<router-view transition="bounce" transition-mode="out-in" keep-alive></router-view>
	</div>
</template>
<style lang="less">
	.article-header{
		position: relative;
		width:100%;
		height:260px;
		background: url(../../static/images/blog-banner.jpg) no-repeat center center #3a506b;
		background-size: cover;
		&::after{
			content: '';
			position: absolute;
			width:100%;
			height:260px;
			background-color: rgba(1,1,1,.4);
		}
	}
</style>