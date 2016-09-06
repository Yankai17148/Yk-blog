<template>
	<header :class="{'not-top': isTop, 'nav-sildedown': navSilde}" v-show="isFront">
		<div class="nav-mask" v-show="navSilde" @click="navSilde = false" transition="fade"></div>
		<div class="container flex-box">
			<div class="logo"><a v-link="{path: '/'}"><i class="icon-logo"></i></a></div>
			<nav>
				<a v-link="{path : '/home'}" class="nav-link">首页</a>
				<a v-link="{path : '/article'}" class="nav-link">博客</a>
				<a v-link="{path : '/about'}" class="nav-link">关于我</a>
			</nav>
			<div class="mobile-bar"><a v-link="{path: '/'}"><i class="icon-logo"></i></a></div>
			<a href="javascript:;" @click="navSildeDown" class="nav-more-button">
				<span class="nav-button-icon icon-1"></span>
				<span class="nav-button-icon icon-2"></span>
				<span class="nav-button-icon icon-3"></span>
			</a>
		</div>
	</header>
</template>

<script>
	export default {
		props: {
			isFront: {default: true}
		},
		data() {
			return　{
				isTop: false,
				navSilde: false
			}
		},
		compiled() {
			this.watchScroll()
		},
		methods: {
			watchScroll() {
				let that = this
				$(window).scroll(()=>{
					if ($(window).scrollTop() >= 150) {
						that.isTop = true
					}else{
						that.isTop = false
					}
				})
			},
			navSildeDown() {
				this.navSilde = !this.navSilde
			}
		}
	}
</script>

<style lang="less">
	header{
		position: fixed;
		box-sizing: border-box;
		left:0;
		top:0;
		width: 100%;
		height: 90px;
		padding-top: 25px;
		color:#fff;
		background: transparent;
		transition: all .3s;
		z-index: 999;
		.mobile-bar{
			display: none;
		}
		&.not-top{
			padding-top: 15px;
			height: 70px;
			background: rgba(31,36,48,.9);
		}
		
		.flex-box{
			display: -webkit-flex;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.icon-logo{
			transition: all .3s;
			font-size: 50px;
			color: #ffea00;
		}
		&.not-top .icon-logo{
			font-size: 40px;
		}
		.nav-more-button{
			display: none;
		}

		nav .nav-link{
			display: inline-block;
			padding: 10px 15px;
			margin-left: 25px;
			position: relative;
			font-size: 14px;
			color: #fff;
			transform: translateZ(0);
			&::after{
				content: '';
				position: absolute;
				left: 0;
				right: 100%;
				top: 0;
				background-color: #fff;
				height: 2px;
				transition: right .3s ease-out;
			}
			&:hover::after,
			&.v-link-active::after{
				right: 0;
			}
			&::before{
				content: '';
				position: absolute;
				left: 100%;
				right: 0;
				bottom: 0;
				background-color: #fff;
				height: 2px;
				transition: left .3s ease-out;
			}
			&:hover::before,
			&.v-link-active::before{
				left: 0;
			}
		}
		&.not-top nav .nav-link{
			font-size: 14px;
		}
	}
	@media all and (max-width: 650px) {
		header{
			padding-top: 8px;
			height: 50px;
			background: transparent;
			&.not-top{
				padding-top: 8px;
				height: 50px;
				background: transparent;
			}
			.logo{
				display: none;
			}
			.mobile-bar{
				display: block;
				box-sizing: border-box;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				padding-top: 8px;
				height: 50px;
				background-color: rgba(31, 36, 48, 0.9);
				text-align: center;
				.icon-logo{
					font-size: 36px;
				}
			}
			.flex-box{
				display: block;
			}
			.nav-more-button{
				display: block;
				position: absolute;
				width: 40px;
				height: 40px;
				top: 5px;
				right: 15px;
				background-color: transparent;
				.nav-button-icon{
					display: block;
					position: absolute;
					width: 22px;
					height: 3px;
					left: 9px;
					border-radius: 2px;
					background-color: #fff;
					transition: all .2s;
				}
				.icon-1{
					top: 10px;
				}
				.icon-2{
					top: 18px;
				}
				.icon-3{
					top: 26px;
				}
			}
			nav{
				position: absolute;
				top: -300px;
				left: 0;
				background-color: #1f2430;
				width: 100%;
				text-align: center;
				box-shadow: 0px 2px 2px rgba(0,0,0,.5);
				transition: all .2s ease;
				opacity: 0;
				.nav-link{
					display: block;
					margin: 0;
					padding: 20px 0;
					&::after{
						content: '';
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						background-color: transparent;
						height: 1px;
						transition: right .3s ease-out;
					}
					&.v-link-active{
						background-color: #3a506b;
					}
					&::before{
						content: '';
						position: absolute;
						left: 100%;
						right: 0;
						bottom: 0;
						background-color: transparent;
						height: 2px;
						transition: left .3s ease-out;
					}
				}
			}
			&.nav-sildedown{
				.nav-mask{
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(0,0,0,.2);
					transition: opacity .2s ease;
				}
				.icon-1{
					transform: translate(0, 8px) rotate(-45deg);
				}
				.icon-2{
					opacity: 0;
					transform: translate(10px, 0);
				}
				.icon-3{
					transform: translate(0, -8px) rotate(45deg);
				}
				
			}
			&.nav-sildedown nav{
				top: 50px;
				opacity: 1;
			}
		}
	}
	.fade-enter, .fade-leave{
		opacity: 0;
	}
</style>