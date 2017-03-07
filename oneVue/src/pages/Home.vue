<template>
	<div class="container">
		<home-header></home-header>
		<div class="content">
			<ul class="cont-ul">
				<list v-for="item in items"
				:price="item.price"
				:title="item.title"
				:myImg="item.myImg"
				:id="item.id">
				</list>
			</ul>
		</div>
	</div>
</template>

<style>
	.container {
		max-width: 640px;
		margin: 0 auto;
		overflow-x: hidden;
		background: #F5FFFA;
	}
	.cont-ul {
		padding-top: .05rem;
		margin: 0 -.012rem;
	}
	.cont-ul:after {
		content: "";
		display: block;
		width: 0;
		height: 0;
		clear: both;
	}
</style>
<script type="text/javascript">
	import HomeHeader from '../components/HomeHeader'
	import List from '../components/List'

	export default {
		data() {
			return {
				items:[]
			}
		} ,
		components: {
			HomeHeader,
			List
		} ,
		created(){
			this.$http.get('/api/books').then(function(data){
                // 由于请求成功返回的是Promise对象，我们要从data.body.data拿到books数组
                this.items = data.body.data;
			})
		}
	}
</script>
