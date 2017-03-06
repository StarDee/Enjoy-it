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
				items: [
				{ price: "99.99",title: "js高程",myImg:require("../assets/img/img-01.jpg"),id:"1" },
				{ price: "66.00",title: "犀牛书",myImg:require("../assets/img/img-02.jpg"),id:"2" },
				{ price: "32.00",title: "js忍者秘籍",myImg:require("../assets/img/img-03.jpg"),id:"3" },
				{ price: "22.00",title: "你不知道的js",myImg:require("../assets/img/img-04.jpg"),id:"4" },
				{ price: "33.33",title: "css权威指南",myImg:require("../assets/img/img-05.jpg"),id:"5" },
				{ price: "44.44",title: "蝴蝶书",myImg:require("../assets/img/img-06.jpg"),id:"6" },
				{ price: "22.22",title: "web优化",myImg:require("../assets/img/img-07.jpg"),id:"7" },
				{ price: "88.88",title: "计算机网络",myImg:require("../assets/img/img-08.jpg"),id:"8" },
				{ price: "66.66",title: "数据结构与算法",myImg:require("../assets/img/img-09.jpg"),id:"9" },
				]
			}
		} ,
		components: {
			HomeHeader,
			List
		}
	}
</script>