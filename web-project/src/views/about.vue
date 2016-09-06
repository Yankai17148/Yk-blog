<template>
	<div>
		<section class="about-header"></section>
		<div class="about-wrapper">
			<div class="about-top">
				<div class="avator wow inShow"><img src="../static/images/avator.png" alt="" width="128" height="128"></div>
				<h3 class="wow inShow" data-wow-delay=".3s">Hi! 我是闫凯</h3>
				<p class="wow inShow" data-wow-delay=".45s">前端开发，设计爱好者，热爱生活，热衷于一切美好的事物</p>
			</div>
			<section class="contact-bar">
				<div class="container contact-wrapper">
					<div class="contact-item wow fadeInDownCustom" data-wow-delay="{{($index * 0.45) + 0.1}}s" v-for="item in contact"><i :class="'icon-' + item.type"></i>{{item.content}}</div>
				</div>
			</section>
			<div class="container about-main">
				<div class="about-block clearfix">
					<h2 class="block-title">经历<small>Experience</small></h2>
					<div class="block-main">
						<div class="experience-item" v-for="exp in experience">
							<div class="exp-type">
								<span class="exp-time">{{exp.since}} - {{exp.from}}</span>
								<h4>{{exp.company}}</h4>
								<p>{{exp.jobTitle}}</p>
							</div>
							<div class="exp-content">{{exp.introduction}}</div>
						</div>
					</div>
				</div>
				<div class="about-block clearfix">
					<h2 class="block-title">技能<small>Skills</small></h2>
					<div class="block-main">
						<div class="skill-item" v-for="skill in skills">
							<div class="skill-text">{{skill.title}}<span>{{skill.level}}</span></div>
							<div class="progress">
								<div class="progress-bar wow progressShow" :style="{width:skill.level}"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="about-block clearfix">
					<h2 class="block-title">关于<small>About</small></h2>
					<div class="block-main">
						<div class="about-item" v-for="item in about">
							<h4>{{item.title}}</h4>
							<p>{{item.content}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contact: [
					{type: 'mobile', content: '18810425157'},
					{type: 'envelop', content: '18810425157@163.com'},
					{type: 'display', content: 'www.yankaiweb.com'}
				],
				experience: [
					{
						since: '2011',
						from: '2014',
						company: '北京吉利大学',
						jobTitle: '计算机应用专业',
						introduction: '2014年毕业于北京吉利大学计算机应用专业，在校期间自学了前端开发相关知识，参与了大量学校官网专题的制作。'
					},
					{
						since: '2014',
						from: '2016.3',
						company: '太原迅易科技有限公司',
						jobTitle: '前端开发工程师',
						introduction: '2014年毕业后就职于太原迅易科技有限公司，参与了多款产品的核心研发，包括：骑士CMS，七云企业时间管理系统，骑士猎头系统等等，核心技术栈为PHP，MySQL，jQuery。后续参与开发了骑士CMS系统的移动端，以及七云企业时间管理系统Hybird应用的前端部分。'
					},
					{
						since: '2014',
						from: '今',
						company: '个人网站',
						jobTitle: '致力于更深层次的前端开发研究',
						introduction: '自毕业后便一直在向一个更专业的前端开发工程师发展，工作之余掌握了一些前端流行技术，维护了一个HEXO个人博客，将新技术在公司内推广，应用在了公司产品中，并用当下比较流行的技术开发了此个人网站'
					}
				],
				skills: [
					{
						title: 'HTML/CSS',
						level: '90%'
					},
					{
						title: 'Javascript',
						level: '70%'
					},
					{
						title: 'NodeJs',
						level: '45%'
					},
					{
						title: 'Photoshop',
						level: '60%'
					}
				],
				about: [
					{
						title: '关于开发',
						content: '对于前端工程化，组件化有着极大的热情，前后端分离的拥护者，乐于尝试新的东西，喜欢简洁的代码，崇尚Less is more。'
					},
					{
						title: '关于设计',
						content: '对所有漂亮的事物都没有抵抗力，收集一切我认为美的设计，包括并不限于网页设计，平面设计，室内设计以及工业设计。'
					},
					{
						title: '关于生活',
						content: '认为人生除了coding还有很多有趣的事要做。网球，健身，旅行，尤克里里，致力于打造一个有立体感的我。'
					}
				]
			}
		}
	}
</script>

<style lang="less">
	.about-header{
		position: relative;
		width:100%;
		height:260px;
		background: url(../static/images/about-banner.jpg) no-repeat center center #3a506b;
		background-size: cover;
		&::after{
			content: '';
			position: absolute;
			width:100%;
			height:260px;
			background-color: rgba(1,1,1,.4);
		}
	}
	.about-wrapper{
		font-size: 12px;
		color: #3a506b;
	}
	.about-top{
		text-align: center;
		padding-top: 60px;
		margin-bottom: 20px;
		.avator{
			display: inline-block;
			width: 128px;
			height: 128px;
			overflow: hidden;
			border-radius: 50%;
			margin-bottom: 25px;
		}
		h3{
			font-size: 24px;
			line-height: 30px;
			font-weight: normal;
			margin-bottom: 10px;
		}
		p{
			font-size: 14px;
			line-height: 28px;
		}
	}

	// 联系
	.contact-bar{
		width: 100%;
		height: 48px;
		background-color: #e2e2e2;
		.contact-wrapper{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			.contact-item{
				line-height: 48px;
				vertical-align: middle;
				width: 25%;
				text-align: center;
				i{
					font-size: 20px;
					vertical-align: text-bottom;
					margin-right: 15px;
				}
			}
		}
	}
	.about-main{
		padding-top: 125px;
		.about-block{
			font-family: Verdana;
			margin-bottom: 75px;
			overflow: hidden;
			.block-title{
				box-sizing: border-box;
				padding-left: 140px;
				float: left;
				width: 30%;
				vertical-align: bottom;
				font-size: 26px;
				color: #273549;
				font-weight: normal;
				small{
					vertical-align: text-bottom;
					font-size: 14px;
					color: #999;
					font-style: italic;
					margin-left: 8px;
					font-family: Verdana;
				}
			}
			.block-main{
				float: left;
				width: 70%;
			}
		}
	}

	// 经历
	.experience-item{
		box-sizing: border-box;
		position: relative;
		width: 100%;
		min-height: 120px;
		padding-bottom: 20px;
		border-left: 2px solid #999;
		padding-left: 20px;
		&::after{
			content: '';
			position: absolute;
			top: -2px;
			left: -11px;
			width: 10px;
			height: 10px;
			background-color: #ffba08;
			border-radius: 50%;
			border: 5px solid #fcfcfc;
			z-index: 2;
		}
		.exp-type{
			float: left;
			width: 30%;
			.exp-time{
				display: inline-block;
				font-size: 14px;
				line-height: 20px;
				font-family: Verdana;
			}
			h4{
				font-size: 16px;
				line-height: 26px;
				font-weight: normal;
			}
			p{
				font-size: 12px;
				line-height: 22px;
			}
		}
		.exp-content{
			float: left;
			width: 70%;
			line-height: 22px;
			font-size: 14px;
		}
	}

	// 技能
	.skill-item{
		box-sizing: border-box;
		padding-right: 90px;
		float: left;
		width: 50%;
		margin-bottom: 30px;
		font-size: 16px;
		font-family: Verdana;
		.skill-text{
			overflow: hidden;
			span{
				font-size: 12px;
				float: right;
			}
		}
		.progress{
			position: relative;
			box-sizing: border-box;
			margin-top: 8px;
			width: 100%;
			height: 12px;
			border: 1px solid #273549;
			border-radius: 10px;
			.progress-bar{
				// position: absolute;
				// top: 0;
				// left: 0;
				height: 10px;
				background-color: #273549;
				border-radius: 10px;
			}
		}
	}
	
	// 关于
	.about-item{
		width: 100%;
		margin-bottom: 10px;
		h4{
			font-size: 18px;
			padding: 15px 0 10px;
			font-weight: normal;
		}
		p{
			font-size: 14px;
			line-height: 22px;
		}
	}

	@media all and (max-width: 950px) {
		.contact-bar .contact-wrapper .contact-item{
			width: 33.333%;
			font-size: 14px;
			i{
				font-size: 16px;
				margin-right: 10px;
			}
		}
		.about-main .about-block .block-title{
			float: none;
			padding-left: 0;
			width: 100%;
			margin-bottom: 20px;
		}
		.about-main .about-block .block-main{
			float: none;
			width: 99%;
			margin-left: 1%;
		}

		.experience-item{
			.exp-type{
				float: none;
				width: 100%;
			}
			.exp-content{
				margin-top: 15px;
				float: none;
				width: 100%;
			}
		}
	}
	@media all and (max-width: 650px) {
		.contact-bar{
			height: auto;
		}
		.contact-bar .contact-wrapper{
			display: block;
			height: auto;
			.contact-item{
				width: 100%;
				font-size: 14px;
				i{
					font-size: 16px;
					margin-right: 10px;
				}
			}
			
		}
		.skill-item{
			float: none;
			width: 100%;
			padding-right: 50px;
		}
	}
</style>