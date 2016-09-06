<template>
	<div class="device-container">
		<div class="wow fadeInLeftCustom iphone" data-wow-delay=".6s" data-wow-offset="200">
			<div class="iphone-camera"></div>
			<div class="iphone-screen"></div>
		</div>
		<div class="wow fadeInRightCustom macbook" data-wow-delay=".3s" data-wow-offset="200">
			<div class="macbook-screen"></div>
			<div class="macbook-bottom"></div>
		</div>
		<div class="imac">
			<div class="imac-screen"><i class="apple-icon"></i></div>
			<div class="imac-bottom"></div>
		</div>
	</div>
</template>
<style lang="less">
	.device-container{
		position: relative;
		width: 1100px;
		height: 590px;
		margin: 0 auto;
	}
	.macbook,
	.iphone,
	.imac{
		display: inline-block;
		position: relative;
		vertical-align: bottom;
	}
	.hidden{
		display: none;
	}
	.macbook,
	.iphone{
		margin-bottom: -25px;
	}
	/*macbook*/
	.macbook{
		position: absolute;
		bottom: 0;
		left: 55%;
		z-index: 2;
	}
	.macbook .macbook-screen{
		position: relative;
		box-sizing: border-box;
		background-color: #333;
		width: 400px;
		height:300px;
		border-radius: 15px 15px 0 0;
		padding:20px 20px;
		border:2px solid #E4E5E9;
		border-bottom:0;
		box-shadow: 1px 1px 3px #888;
	}
	.macbook .macbook-screen::after{
		position: absolute;
		content: '';
		width: 360px;
		height: 260px;
		background-color: #666;
	}
	.macbook .macbook-bottom{
		position: relative;
		width: 480px;
		height: 20px;
		background-color: #E4E5E9;
		margin-left: -40px;
		border-radius: 0 0 10px 10px;
		box-shadow:  1px 1px 3px #888;
	}
	.macbook .macbook-bottom::after{
		content: '';
		width: 100px;
		height: 10px;
		position: absolute;
		top:0;
		left:50%;
		transform: translateX(-50%);
		background-color: #A7A7AF;
		border-radius: 0 0 6px 6px
	}
	/*iphone*/
	.iphone{
		position: absolute;
		bottom: 0;
		left: 15%;
		box-sizing: border-box;
		width: 100px;
		height: 200px;
		background-color: #E4E5E9;
		border-radius: 14px;
		z-index: 3;
		box-shadow: inset 0px 0px 3px #fff, 1px 1px 3px #999;
		border:1px solid #E4E5E9;
		padding:25px 5px;
		/*transform: scale(3);*/
	}
	.iphone::after{
		content:'';
		position: absolute;
		left:-2px;
		top:30px;
		width: 2px;
		height: 20px;
		background-color: #E4E5E9;
		box-shadow: 0px 22px 0px #E4E5E9;
	}
	.iphone .iphone-screen{
		position: relative;
		width: 88px;
		height: 150px;
		background-color: #333;
	}
	.iphone .iphone-screen::after{
		position: absolute;
		content:'';
		width: 20px;
		height: 2px;
		background-color: #333;
		top:-9px;
		left:50%;
		transform: translateX(-50%);
		border-radius: 2px;
	}
	.iphone .iphone-screen::before{
		position: absolute;
		content:'';
		width: 16px;
		height: 16px;
		bottom:-20px;
		left:50%;
		transform: translateX(-50%);
		background-color: #E4E5E9;
		border:1px solid #909295;
		border-radius: 50%;
		z-index: 3;
	}
	.iphone .iphone-camera{
		position: absolute;
		top:8px;
		left:50%;
		transform: translateX(-50%);
		width: 2px;
		height: 2px;
		background-color: #333;
		border-radius: 50%;
	}
	.iphone .iphone-camera::after{
		position: absolute;
		content: '';
		width: 3px;
		height: 3px;
		background-color: #333;
		border-radius: 50%;
		left:-16px;
		top:7px;
	}
	/*iMac*/
	.imac{
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}
	.imac .imac-screen{
		position: relative;
		box-sizing: border-box;
		width: 740px;
		height: 510px;
		background-color: #333;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 2px 2px 10px #999;
		z-index: 2;
	}
	.imac .imac-screen::after{
		content:'';
		position: absolute;
		height: 80px;
		width: 100%;
		bottom:0;
		left:0;
		background-color: #E4E5E9;
	}
	.imac .imac-screen::before{
		position: absolute;
		content:'';
		width: 680px;
		height: 370px;
		background-color: #666;
		top:30px;
		left:30px;
	}
	.imac .imac-screen .apple-icon{
		position: absolute;
		bottom:24px;
		left:50%;
		transform: translateX(-50%);
		display: inline-block;
		width: 30px;
		height: 35px;
		background: url(../static/images/appleinc.svg) no-repeat;
		color:#333;
		z-index: 10;
	}
	.imac .imac-bottom{
		position: relative;
		left:50%;
		bottom:0;
		transform: translateX(-50%);
		width: 120px;
		height: 0;
		border-bottom:80px solid #ccc;
		border-left:20px dashed transparent;
		border-right:20px dashed transparent;
		z-index: 1;
	}
	.imac .imac-bottom::after{
		position: absolute;
		content:'';
		left:50%;
		bottom:-100px;
		transform: translateX(-50%);
		width: 160px;
		height: 0;
		border-bottom:20px solid #9C9DA1;
		border-left:20px dashed transparent;
		border-right:20px dashed transparent;
		box-shadow: 0px 5px 0px #ccc
	}

	@media all and (max-width: 1150px) {
		.device-container{
			width: 950px;
			height: 475px;
			.imac{
				transform: translateX(-50%) scale(.8);
				transform-origin: bottom;
			}
			.iphone, .macbook{
				transform: scale(.8);
				transform-origin: bottom;
			}
		}
	}
	@media all and (max-width: 950px) {
		.device-container{
			width: 600px;
			height: 355px;
			.imac{
				transform: translateX(-50%) scale(.6);
				transform-origin: bottom;
			}
			.iphone, .macbook{
				transform: scale(.6);
			}
			.iphone{
				left: 8%;
			}
			.macbook{
				left: 44%;
			}
		}
	}
	@media all and (max-width: 650px) {
		.device-container{
			max-width: 320px;
			height: 240px;
			.imac{
				transform: translateX(-50%) scale(.4);
				transform-origin: bottom;
			}
			.iphone, .macbook{
				transform: scale(.4);
				bottom: 15px;
			}
			.iphone{
				left: 10px;
			}
			.macbook{
				right: 60px;
			}
		}
	}
</style>