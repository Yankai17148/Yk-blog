<template>
	<div class="add-article-container">
		<h2>新文章</h2>
		<section class="new-container">
			<div class="uploadwrapper">
				<div class="preview-box">
					<img src="../../static/images/upload-default.jpg" alt="" id="previewImg" width="300" height="200">
				</div>
				<form class="upload-form" @submit.prevent="uploadImg()" novalidate>
					<div class="upload-box"><input type="file" name="indexImg" id="indexImg" @change="imgPreview"></div>
					<button type="submit" class="upload-button">上传封面图</button>
				</form>
			</div>
			<a v-link="{path: '/admin'}" class="back-to-list" data-tips="返回列表"><i class="icon-undo2"></i></a>
			<div class="title"><input type="text" v-model="post.title" placeholder="文章标题"></div>
			<div class="content-editer">
				<div class="editer-area"><textarea name="contentMarkdown" id="contentMarkdown" cols="30" rows="10" v-model="post.contentMarkdown" @scroll="scrollEvent" spellcheck="false" placeholder="使用Markdown语法编辑"></textarea></div>
				<div class="editer-preview markdown-wrapper" v-html="post.contentMarkdown | marked"></div>
			</div>
			<button class="create-article-button" @click="postArticle()">创建</button>
			
		</section>
		<vue-toast v-ref:toast></vue-toast>
	</div>
</template>

<script>
	import marked from 'marked'
	import VueToast from 'vue-toast'

	export default {
		data() {
			return {
				post: {
					title: '',
					contentHtml: '',
					contentMarkdown: '',
					indexImg: ''
				},
				toastOption: {
					position: 'right top',
					theme: 'error',
					timeLife: '1000'
				},
				err: '',
				
			}
		},
		watch: {
			'theme + position + timeLife': 'resetToast'
		},
		attached() {
			this.resetToast()
		},
		methods: {
			postArticle() {
				if (this.post.title == '') {
					this.$refs.toast.showToast('标题不能为空', {
						theme: 'error',
						timeLife: 1000
					})
				}else if (this.post.contentMarkdown == '') {
					this.$refs.toast.showToast('内容不能为空', {
						theme: 'error',
						timeLife: 1000
					})
				}else{
					this.post.contentHtml = marked(this.post.contentMarkdown)
					let that = this
					this.$http.post('/api/article/addArticle', this.post).then((response) => {
						let res = response.json()
						console.log(this.post.indexImg)
						if (!res.success) {
							this.$refs.toast.showToast(res.msg, {
								theme: 'error',
								timeLife: 1000
							})
						}else {
							this.$refs.toast.showToast(res.msg, {
								theme: 'success',
								timeLife: 1000
							})
							setTimeout(() => {
								that.$router.go({path: '/admin'})
							}, 1500)
						}
					})
				}
			},
			scrollEvent() {
				let editScroll = $('#contentMarkdown').scrollTop()
				$('.editer-preview').scrollTop(editScroll)
			},
			imgPreview(e) {
				let file = e.target.files[0]
				let reader = new FileReader()
				reader.onload = (e) => {
					$('#previewImg').attr('src', reader.result)
				}
				if (file) {
					reader.readAsDataURL(file);
				}
			},
			uploadImg() {
				let uploadImg = document.getElementById('indexImg').files[0]
				if (!uploadImg) {
					this.$refs.toast.showToast('你还没有选择封面图片', {
						theme: 'error',
						timeLife: 1000
					})
					return
				}
				let formData = new FormData()
				formData.append('indexImg', uploadImg, uploadImg.name)
				this.$http.post('/api/article/uploadImg', formData).then((response) => {
					let res = response.json()
					if (!res.success) {
						this.$refs.toast.showToast(res.msg, {
							theme: 'error',
							timeLife: 1000
						})
					}else　{
						this.post.indexImg = res.data.filename
						this.$refs.toast.showToast(res.msg, {
							theme: 'success',
							timeLife: 1000
						})
					}
				})
			},
			resetToast() {
				this.$refs.toast.setOptions({
					theme: this.toastOption.theme,
					position: this.toastOption.position,
					timeLife: this.toastOption.timeLife
				})
			}
		},
		filters: {
			marked: marked
		},
		components: {
			VueToast
		}
	}
</script>

<style lang="less">
	.add-article-container{
		width: 1200px;
		margin: 0 auto;
		h2{
			padding-top: 40px;
			font-size: 30px;
			font-weight: normal;
			color: #273549;
			padding-bottom: 15px;
		}
		.new-container{
			position: relative;
			padding: 20px 0;
			.back-to-list{
				position: absolute;
				right: 10px;
				top:280px;
				color: #3a506b;
				font-size: 20px;
				transition: all .3s;
				&:hover{
					color: #567aa5;
				}
				&::after{
					position: absolute;
					content: attr(data-tips);
					top: -3px;
					left: -50%;
					white-space: nowrap;
					font-size: 12px;
					padding: 5px 10px;
					color: #fff;
					border-radius: 3px;
					background-color: #3a506b;
					transition: all .3s;
					transform: translateX(-80px);
					opacity: 0;
				}
				&:hover::after{
					transform: translateX(-60px);
					opacity: 1;
				}
			}
			.title{
				box-sizing: border-box;
				width: 100%;
				margin-bottom: 10px;
				input{
					box-sizing: border-box;
					background-color: #fff;
					width: 100%;
					padding: 10px;
					font-size: 18px;
					color: #3a506b;
					border: 1px solid #ccc;
					border-radius: 3px;
					transition: all .3s;
					&:focus{
						border: 1px solid #3a506b;
					}
				}
			}
		}
		.content-editer{
			display: flex;
			.editer-area{
				flex: 1;
				padding-right: 5px;
				textarea{
					box-sizing: border-box;
					background-color: #fff;
					width: 100%;
					padding: 15px;
					color: #3a506b;
					border: 1px solid #ccc;
					font-size: 14px;
					height: 500px;
					resize: none;
					transition: all .3s;
					&:focus{
						border-color: #3a506b;
					}
					&::-webkit-scrollbar{
						width: 6px;
						height: 6px;
					}
					&::-webkit-scrollbar-track-piece {
						background: #eee;
					}
					&::-webkit-scrollbar-thumb{
						background-color: #999;
						border-radius: 5px;
					}
				}
			}
			.editer-preview{
				flex: 1;
				box-sizing: border-box;
				margin-left: 5px;
				padding: 15px;
				background-color: #f5f5f5;
				height: 500px;
				overflow-y: auto;
				overflow-x: hidden;
				&::-webkit-scrollbar{
					width: 6px;
					height: 6px;
				}
				&::-webkit-scrollbar-track-piece {
					background: #eee;
				}
				&::-webkit-scrollbar-thumb{
					background-color: #999;
					border-radius: 5px;
				}
				pre{
					code{
						font-family: Consolas, Monaco, Menlo, monospace;
					}
					
					background-color: #1d1f21;
					color: #c5c8c6;
				}
			}
		}
		.create-article-button{
			float: right;
			margin: 15px 0;
			padding: 10px 30px;
			border: 1px solid #3ec6ff;
			background-color: #45c8ff;
			color: #fff;
			border-radius: 3px;
			&:hover{
				background-color: #00b4ff;
				box-shadow: 0px 0px 8px rgba(0, 180, 255, 0.6);
			}
			&:active{
				background-color: #0094d2;
			}
		}
		
	}
	// 封面上传
	.uploadwrapper{
		width: 320px;
		display: inline-block;
		margin-bottom: 15px;
		border: 1px solid #ccc;
		.preview-box{
			width: 300px;
			height: 200px;
			padding: 10px;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
		}
		.upload-form{
			padding: 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.upload-box{
			position: relative;
			width: 120px;
			height: 30px;
			overflow: hidden;
			border: 1px solid #ccc;
			border-radius: 3px;
			&::after{
				content: '选择封面';
				position: absolute;
				width: 120px;
				height: 30px;
				line-height: 30px;
				cursor: pointer;
				text-align: center;
				color: #3a506b;
				background-color: #fff;
				transition: all .3s;
			}
			&:hover::after{
				background-color: #e5e5e5;
			}
			input[type=file]{
				position: absolute;
				top: 0;
				right: 0;
				height: 30px;
				min-width: 200px;
				opacity: 0;
				cursor: pointer;
				z-index: 10;
			}
		}
		.upload-button{
			width: 120px;
			height: 30px;
			border: 1px solid #3ec6ff;
			background-color: #45c8ff;
			color: #fff;
			border-radius: 3px;
			transition: all .3s;
			&:hover{
				background-color: #00b4ff;
			}
		}
	}
</style>