<template>
	<div class="admin-list">
		<h2>文章列表</h2>
		<section class="list-main">
			<table>
				<tr>
					<th>标题</th>
					<th>创建时间</th>
					<th>修改时间</th>
					<th>操作</th>
				</tr>
				<tr class="list-item" v-for="item in list">
					<td><a v-link="">{{item.title}}</a></td>
					<td>{{item.create_time | formateDate}}</td>
					<td>{{item.update_time | formateDate}}</td>
					<td>
						<button class="list-control button-edit" v-link="{name: 'edit-article', params: {id: item._id}}">修改</button>
						<button class="list-control button-delete" @click="delAction(item._id)">删除</button>
					</td>
				</tr>
			</table>
		</section>
		<modal :show.sync="showModal">
			<span slot="body">是否要删除此文章？</span>
			<div slot="footer" class="modal-confirm">
				<button @click="showModal = false" class="list-control button-edit">不删了</button>
				<button @click="delArticle" class="list-control button-delete">删丫的</button>
			</div>
		</modal>
		<vue-toast v-ref:toast></vue-toast>
	</div>
</template>

<script>
	import modal from '../../components/modal.vue'
	import VueToast from 'vue-toast'

	export default {
		data() {
			return {
				list: [],
				showModal: false,
				willDeleteId: '',
				toastOption: {
					position: 'right top',
					theme: 'error',
					timeLife: '1000'
				}
			}
		},
		route: {
			data() {
				this.$http.get('/api/article/getarticlelist').then((response) => {
					let res = response.json()
					this.list = res.data
				})
			}
		},
		watch: {
			'theme + position + timeLife': 'resetToast'
		},
		attached() {
			this.resetToast()
		},
		methods: {
			delAction(id) {
				this.showModal = true
				this.willDeleteId = id
			},
			delArticle() {
				this.$http.delete('/api/article/' + this.willDeleteId).then((response) => {
					let res = response.json()
					this.showModal = false
					this.willDeleteId = ''
					if (!res.success) {
						this.$refs.toast.showToast(res.msg, {
							theme: 'error',
							timeLife: 1000
						})
					}else {
						this.list = res.data
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
		components: {
			modal,
			VueToast
		}
	}
</script>

<style lang="less">
	.admin-list{
		width: 1200px;
		margin: 0 auto;
		h2{
			margin-top: 40px;
			font-weight: normal;
			font-size: 30px;
			color: #273549;
			padding-bottom: 15px;
			border-bottom: 2px solid #ccc;
		}
	}
	.list-main{
		table{
			table-layout: fixed;
			background-color: transparent;
			width: 100%;
			max-width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
			color:#1f2430;
			tr{
				text-align: center;
				
				td{
					padding: 15px 0;
					border-bottom: 1px solid #ccc;
				}
				th{
					font-size: 16px;
					font-weight: normal;
					padding: 25px 0;
				}
				td:nth-child(1),
				th:nth-child(1){
					text-align: left;
				}
			}
		}
	}
	.list-control{
		padding: 5px 20px;
		transition: all .3s;
		margin: 0 6px;
		display: inline-block;
	}
	.button-edit{
		border: 1px solid #3ec6ff;
		background-color: #45c8ff;
		color: #fff;
		border-radius: 3px;
		&:hover{
			background-color: #00b4ff;
		}
	}
	.button-delete{
		border: 1px solid #ff3e3e;
		background-color: #ff6363;
		color: #fff;
		border-radius: 3px;
		&:hover{
			background-color: #ff5353;
		}
	}
	.modal-confirm{
		text-align: center;
	}
</style>