<template>
	<div class="SearchPage">
		<button @click="Return()">返回</button>
		<Search></Search>
		我是搜索页面。
	</div>
	
</template>

<script>
	import Search from '.././components/search.vue'
	export default {
		name:"SearchPage",
		components:{
			Search
		},
		methods:{
			Return(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
</style>