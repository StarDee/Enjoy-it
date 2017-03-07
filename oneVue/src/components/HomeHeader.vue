<template>
	<header class="header">
		<div class="header-inner">
			<div class="header-cont">主页</div>
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
		padding: 0 .24rem;
		overflow: hidden;
		border-bottom: .02rem solid #80ccd6;
		background: #5c9bb7;
	}
	.header-cont {
		text-align: center;
		padding: 0 .4rem;
		line-height: .86rem;
		font-size: 16px;
    color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
