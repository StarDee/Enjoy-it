<template>
	<header class="header">
		<div class="header-inner">
			<div id="header-btn-nav" class="header-btn header-btn-back" v-on:click="goBack">返回</div>

			<div class="header-detail">详情</div>
			<!-- <div class="header-btn header-btn-cart"></div> -->
		</div>
	</header>
</template>

<style scoped>

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
		border-bottom: .02rem solid #80ccd6;
		background: #5c9bb7;
	}
	.header-btn {
		position: absolute;
		top: .22rem;
		left: .2rem;
		width: .5rem;
		cursor: pointer;
	}
	.header-btn-back {
    text-align: center;
    color: #fff;
    line-height: .4rem;
    border-radius: 4px 4px;
    background-color: #80ccd6;
	}
	.header-detail {
		text-align: center;
		padding: 0 .04rem;
		line-height: .86rem;
		font-size: 16px;
    color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.header-btn:active {
		opacity: .7;
    background-color: #5c9bb7;
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
