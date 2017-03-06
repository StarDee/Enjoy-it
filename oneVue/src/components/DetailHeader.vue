<template>
	<header class="header">
		<div class="header-inner flexwrap">
			<div id="header-btn-nav" class="header-btn header-btn-back" v-on:click="goBack">返回</div>
		
			<div class="header-detail flex">详情</div>
			<!-- <div class="header-btn header-btn-cart"></div> -->
		</div>
	</header>
</template>

<style scoped>
	.flexWrap {
		display: -wenkit-flex;
		display: flex;
	}
	.flex {
		flex: 1;
	}
	.header {
		height: .88rem;
	}
	.header-inner {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		max-width: 640px;
		height: .88rem;
		box-sizing: border-box;
		margin: 0 auto;
		
		padding-bottom: .02rem solid #80ccd6;
		background: #5c9bb7;
	}
	.header-btn {
		position: absolute;
		top: 0;
		left: .2rem;
		width: .5rem;
		height: 100%;
		background: no-repeat;
		cursor: pointer;
	}
	.header-btn-back {
		line-height: .86rem;
	}
	.header-detail {
		text-align: center;
		padding: 0 .04rem;
		line-height: .86rem;
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.header-btn:active {
		opacity: .7;
	}
</style>
<script type="text/javascript">
	export default {
		methods: {
			goBack(){
					window.history.back();
			}
		}
	}
</script>