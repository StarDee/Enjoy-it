<template>
	<div class="detail">
		<detail-header></detail-header>
		<img src="../assets/img/img-01.jpg" alt="">
		<p>本书从最早期Netscape浏览器中的JavaScript开始讲起，直到当前它对XML和Web服务的具体支持，内容主要涉及JavaScript的语言特点、JavaScript与浏览器的交互、更高级的JavaScript技巧，以及与在Web应用程序中部署JavaScript解决方案有关的问题，如错误处理、调试、安全性、优化/混淆化、XML和Web服务，最后介绍应用所有这些知识来创建动态用户界面。</p>
		<p>本书适合有一定编程经验的开发人员阅读，也可作为高校相关专业课程的教材。</p>
	</div>
</template>
<style scoped>
	.detail {
		max-width: 640px;
		margin: 0 auto;
		overflow: hidden;
		font-size: 12px;
		background: #F5FFFA;
	}
	img {
		display: block;
		width: 75%;
		margin: .24rem auto;
	}
	p {
		font-size: 14px;
		line-height: .4rem;
		text-align: justify;
		padding: 0 .24rem .24rem;
	}
</style>
<script type="text/javascript">
	import DetailHeader from '../components/DetailHeader'

	export default {
		components:{
			DetailHeader
		} ,
		methods:{
			getId(){
				var id=sessionStorage.id
			}
		}
	}
</script>