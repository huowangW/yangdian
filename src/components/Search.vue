<template>
	<div class="Search">
		<form>
			<input 
				placeholder="Montagne jeunesse" 
				type="text" 
				class="text" 
				@click="toClick()"
				/>
			<span class="iconfont btn">&#xe699;</span>
		</form>
	</div>
</template>

<script>
	export default {
		name: "Search",
		methods:{
			toClick(){
				this.$router.push('SearchPage')
			}
		}
	}
</script>

<style scoped>
	
	.Search form {
		width: 516px;
		height: 62px;
		margin: 0 auto;
		border-radius: 14px;
		opacity: 0.7;
		overflow: hidden;
	}
	
	.Search form .text {
		float: left;
		width: 432px;
		padding-left: 24px;
		height: inherit;
	}
	
	.Search form .btn {
		float: left;
		background: #fff;
		width: 60px;
		height: 62px;
		line-height: 62px;
		font-size: 42px;
		text-align: left;
	}
</style>