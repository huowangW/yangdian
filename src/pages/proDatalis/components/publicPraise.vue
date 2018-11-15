<template>
	<div class="publicPraise">
		<div class="evaluate">
			<ul>
				<li :class="index===on?'on':''" @click="onClick(index)" v-for="(item,index) in title" :key="item.id">{{item.Text}}</li>
			</ul>
		</div>
		<div class="evaluateList">
			<ul>
				<li>
					<div class="title">
						<h2>
						月色花香
						</h2>
						<span>2015-10-03 21:47:13</span>
					
					</div>
					<img src="../../../images/proDatalis/evaluate.png"/>
					<p>已经开始喝第二阶段的奶粉了，会继续支持德贝</p>
					<p class="Return">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务</p>
				</li>
				<li>
					<div class="title">
						<h2>
						月色花香
						</h2>
						<span>2015-10-03 21:47:13</span>
					
					</div>
					<img src="../../../images/proDatalis/evaluate.png"/>
					<p>已经开始喝第二阶段的奶粉了，会继续支持德贝</p>
					<p class="Return">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务</p>
				</li>
				<li>
					<div class="title">
						<h2>
						月色花香
						</h2>
						<span>2015-10-03 21:47:13</span>
					
					</div>
					<img src="../../../images/proDatalis/evaluate.png"/>
					<p>已经开始喝第二阶段的奶粉了，会继续支持德贝</p>
					<p class="Return">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务</p>
				</li>
			</ul>
		</div>
	</div>
</template>
	
<script>
	export default {
		name: "publicPraise",
		data(){
			return{
				"on":0,
				title:[{
					"id":1,
					"Text":"全部评价",
					"href":"/proDatalis/publicPraise/all"
				},
				{
					"id":2,
					"Text":"好评",
					"href":"/proDatalis/publicPraise/good"
				},
				{
					"id":3,
					"Text":"差评",
					"href":"/proDatalis/publicPraise/bad"
				},
				{
					"id":4,
					"Text":"晒单",
					"href":"/proDatalis/publicPraise/show"
				}]
			}
		},
		methods:{
			onClick(i){
				this.on = i
			}
		}
	}
</script>

<style scoped>
	.evaluate{
		height: 72px;
		width: 100%;
		border-top: 1px solid #dddddd;
	}
	.evaluate ul{
		height: inherit;
		line-height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.evaluate ul li{
		background: #999999;
		width: 136px;
		height: 50px;
		line-height: 50px;
		font-size: 24px;
		color: #fff;
		text-align: center;
		border-radius: 20px;
	}
	.evaluate ul li.on{
		background: #ff9900;
	}
	.evaluateList ul li{
		padding-bottom: 20px;
		border-bottom: 1px solid #dddddd;
	}
	.evaluateList ul li .title{
		width: 692px;
		height: 62px;
		line-height: 62px;
		border-top: 1px solid #dddddd;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.evaluateList ul li .title h2{
		font-size: 24px;
		color: #ff9900;
	}
	.evaluateList ul li .title h2 span{
		font-size: 18px;
		color: #999999;
	}
	.evaluateList ul li img{
		display: block;
		width: 152px;
		height: 152px;
		margin-left: 30px;
	}
	.evaluateList ul li p{
		margin-left: 30px;
		font-size: 20px;
		color: #999999;
		line-height: 40px;
	}
	.evaluateList ul li p.Return{
		margin: 0 auto;
		width: 690px;
		font-size: 18px;
		color: #666666;
		line-height: 32px;
		background: #dddddd;
		border-radius: 10px;
	}
</style>