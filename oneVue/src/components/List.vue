<template>
	<li class="sec-li" v-on:click="toDetail(id)">
		<router-link  to="/detail" class="lp-li-a" >
			<div class='lp-li-imgWrap'>
				<img v-bind:src="myImg" alt="">
			</div>
			<p class="lp-li-name">{{title}}</p>
			<p class="lp-li-price">￥{{price}}元</p>
		</router-link>
	</li>	
</template>

<style scoped>
	.sec-li {
		float: left;
		width: 50%;
		margin-bottom: .01rem;
	}
	.lp-li-a {
		display: block;
		padding: .3rem 0;
		margin: 0 .05rem;
		text-align: center;
		background: #fff;
	}
	.lp-li-imgWrap {
		padding: .24rem 0;
	}
	.lp-li-imgWrap>img {
		
		width: auto;
		height: 2.3rem;
		
	}
	.lp-li-name {
		height: .5rem;
		line-height: .5rem;
		font-size: 16px;
		color: #333;
	}
	.lp-li-price {
		height: .5rem;
		line-height: .5rem;
		font-size: 16px;
		color: #fb3b3b;
	}
</style>
<script type="text/javascript">
	export default {
		props: ['price','title','myImg','id'],
	
		methods:{
			toDetail:function (id) {
				sessionStorage.id=id;
			}
		}
	}
</script>