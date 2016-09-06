<template>
	<div class="admin-ui">
		<section class="admin-header">
			<div class="admin-logo"><a v-link="{path: '/'}"><i class="icon-logo"></i></a></div>
			<div class="admin-control">
				<div class="create-article"><button v-link="{path: '/admin/addarticle'}">添加文章</button></div>
				<div class="logout"><a href="javascript:;" @click="userLogout()" data-tips="登出"><i class="icon-switch"></i></a></div>
			</div>
		</section>
		<router-view transition="sildeDown" transition-mode="out-in" keep-alive></router-view>
	</div>
</template>

<script>
	import 'vue-toast/dist/vue-toast.min.css'
	import cookieUtil from '../../util/cookieUtil'

	export default {
		data() {
			return {
				msg: 'asd'
			}
		},
		route: {
			data() {
				this.$parent.isFront = false
			}
		},
		methods: {
			userLogout() {
				console.log("asd")
				$.get('/api/user/logout', (results) => {
					console.log(results);
					cookieUtil.delCookie('isLogin')
					this.$router.go({path: '/login'})
				})
			}
		}
	}
</script>

<style lang="less">
	.admin-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1200px;
		margin: 0 auto;
		height: 80px;
		.admin-logo{
			position: relative;
			float: left;
			font-size: 42px;
			a{
				color: #3a506b;
				&:hover{
					color: #567aa5;
				}
			}
		}
		.admin-control{
			float: right;
			div{
				display: inline-block;
			}
			.create-article button{
				display: block;
				margin-right: 10px;
				padding: 0 20px;
				line-height: 30px;
				border: 1px solid #3ec6ff;
				background-color: #45c8ff;
				color: #fff;
				border-radius: 3px;
				&:hover{
					box-shadow: 0px 0px 8px rgba(0,180,255,.6);
					background-color: #00b4ff;
				}
			}
			.logout{
				font-size: 22px;
				vertical-align: middle;
				a{	
					position: relative;
					color: #3a506b;
					&:hover{
						color: #567aa5;
					}
					&::after{
						content: attr(data-tips);
						position: absolute;
						top: 0;
						left: -50%;
						white-space: nowrap;
						font-size: 12px;
						padding: 5px 10px;
						border-radius: 3px;
						color: #fff;
						background-color: #3a506b;
						transition: all .3s;
						transform: translateY(40px);
						opacity: 0;
					}
					&:hover::after{
						transform: translateY(25px);
						opacity: 1;
					}
				}
			}
		}
	}
</style>