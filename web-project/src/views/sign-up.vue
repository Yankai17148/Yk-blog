<template>
	<div class="admin-ui">
		<div class="login-bg"></div>
		<div class="login-container">
			<h2 class="login-logo"><a v-link="{path: '/'}"><i class="icon-logo"></i></a></h2>
			<h4 class="login-title">注册</h4>
			<div id="loginForm">
				<form class="login-form" @submit.prevent="signUp()" novalidate>
					<div class="form-group"><input type="text" name="userName" v-model="user.userName" class="form-control" placeholder="用户名"></div>
					<div class="form-group"><input type="password" name="password" v-model="user.password" class="form-control" placeholder="密码"></div>
					<button class="login-button" type="submit">注册</button>
				</form>
			</div>
		</div>
		<vue-toast v-ref:toast></vue-toast>
	</div>
</template>

<script>
	import cookieUtil from '../util/cookieUtil'
	import VueToast from 'vue-toast'

	export default {
		data() {
			return {
				user: {
					userName: '',
					password: ''
				},
				toastOption: {
					position: 'right top',
					theme: 'error',
					timeLife: '1000'
				}
			}
		},
		route: {
			data() {
				this.$parent.isFront = false
			}
		},
		watch: {
			'theme + position + timeLife': 'resetToast'
		},
		attached() {
			this.resetToast()
		},
		methods: {
			signUp() {
				let that = this
				if (this.user.userName == '') {
					this.$refs.toast.showToast('用户名不能为空', {
						theme: 'error',
						timeLife: 1000
					})
				}else if(this.user.password == '') {
					this.$refs.toast.showToast('密码不能为空', {
						theme: 'error',
						timeLife: 1000
					})
				}else {
					this.$http.post('/api/user/signup', this.user).then((response) => {
						let res = response.json()
						if (!res.success) {
							this.$refs.toast.showToast('注册失败，' + res.msg, {
								theme: 'error',
								timeLife: 1000
							})
						}else {
							cookieUtil.setCookie('isLogin', '1', 7)
							setTimeout(() => {
								that.$router.go({path: '/admin'})
							}, 1500)
							this.$refs.toast.showToast(res.msg, {
								theme: 'success',
								timeLife: 1000
							})
						}
					})
				}
			},
			resetToast() {
				this.$refs.toast.setOptions({
					theme: this.toastOption.theme,
					position: this.toastOption.position,
					timeLife: this.toastOption.timeLife
				})
			}
		},
		components: {
			VueToast
		}
	}
</script>

<style lang="less">
	.admin-ui{
		position: relative;
		width: 100%;
		height: 100%;
		.login-bg{
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(to top,#273549,#3a506b);
		}
	}
	.login-container{
		position: absolute;
		top: 200px;
		left: 50%;
		width: 320px;
		background-color: transparent;
		color: #fff;
		text-align: center;
		transform: translateX(-50%);
		.login-logo{
			font-size: 60px;
			a{
				color: #ffea00;
				transition: all .3s;
				&:hover{
					color: #ffef3d;
					text-shadow: 0px 0px 15px #fff7a1;
					animation: logo-light 2s infinite ease;
					animation-delay: .3s;
				}
			}
		}
		h4{
			font-size: 32px;
			font-weight: normal;
			margin: 20px 0;
		}
		.form-group{
			margin-bottom: 25px;
			input{
				box-sizing: border-box;
				width: 100%;
				padding: 12px;
				border: 2px solid #fff;
				border-radius: 3px;
				font-size: 16px;
				color: #fff;
				background-color: transparent;
				&::placeholder{
					color: #ccc;
				}
			}
		}
		.login-button{
			box-sizing: border-box;
			width: 100%;
			padding: 12px 0;
			font-size: 16px;
			border: 1px solid #3ec6ff;
			background-color: #45c8ff;
			color: #fff;
			border-radius: 3px;
			transition: all .3s;
			&:hover{
				background-color: #00b4ff;
				box-shadow: 0px 0px 8px rgba(0,180,255,.6);
			}
		}

	}

	@keyframes logo-light {
		0% {
			text-shadow: 0px 0px 15px #fff7a1;
		}
		50% {
			text-shadow: 0px 0px 5px #fff7a1;
		}
		100% {
			text-shadow: 0px 0px 15px #fff7a1;
		}
	}
</style>