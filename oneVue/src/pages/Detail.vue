<template>
	<div class="detail">
		<detail-header></detail-header>
		<img v-bind:src="item.myImg" alt="">
		<p>{{item.detail}}</p>

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
		width: 70%;
		margin: .24rem auto;
	}
	p {
		font-size: 14px;
		line-height: .35rem;
		text-align: justify;
    margin: auto .45rem;
		padding: 0 .24rem .4rem;
	}
</style>
<script type="text/javascript">
	import DetailHeader from '../components/DetailHeader'

	export default {
    data() {
      return {
        item:{}
      }
    } ,
		components:{
			DetailHeader
		} ,
    created(){
      this.$http.get('/api/books').then(function(data){
        // 由于请求成功返回的是Promise对象，我们要从data.body.data拿到books数组
        this.item = data.body.data[sessionStorage.id-1];
      })
    }
	}
</script>
