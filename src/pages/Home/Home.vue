<template>
	<div class="Home">
		<Search class="search"></Search>
		<banner class="banner"></banner>
		
		
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import Search from '@/components/Search.vue'
	import banner from './components/banner.vue'
	export default {
		name:"Home",
		components:{
			Search,
			banner
		}
	}
</script>
<style scoped>
.Home .search{
	position: absolute;
	z-index: 2;
	left: 0;
	right: 0;
	margin: 0 auto;
	margin-top: 14px;
}
.Home .banner{
	position: absolute;
	z-index: 1;
}
</style>
