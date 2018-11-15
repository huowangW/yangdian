

<template>
	<div class="Classify">
		<div class="abc">
			<div class="header">
				<search class="search"></search>
			</div>
		</div>
		<div class="main">
			<div class="slideBar" ref="slideBar">
				<ul>
					<li v-for="(item,index) in slideBarList" @click="onClick(index,$event)" :class="{on:index === active}" :key="index">{{item}}</li>
				</ul>
			</div>
			<div class="wrapper" ref="wrapper">
				<ul>
					<li v-for="(items,index) in classifyList" :key="index" ref="wrapperList">
						<ol>
							<li v-for="(item) in items" :key="item.id">
								<router-link to="./proDatalis">
									<div class="img">
										<img :src=item.imgUrl />
									</div>
									<p class="text">{{item.Text}}</p>
								</router-link>
							</li>
						</ol>
					</li>
				</ul>
			</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import search from '../.././components/search'
	import BScroll from 'better-scroll'
	export default {

		//		import BScroll from 'better-scroll'
		name: "Classify",
		components: {
			search
		},
		data() {
			return {
				scrollY:0,
				clickEvent: false,
				index: "",
				listHeight: [],
				slideBarList: ["母婴专区", "美妆护肤", "家居生活", "食品营养", "全球直邮"],
				classifyList: [
					[{
							id: 1,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "奶粉"
						},
						{
							id: 2,
							imgUrl: require("../../images/classify/classify02.png"),
							Text: "奶粉"
						},
						{
							id: 3,
							imgUrl: require("../../images/classify/classify03.png"),
							Text: "奶粉"
						},
						{
							id: 4,
							imgUrl: require("../../images/classify/classify04.png"),
							Text: "奶粉"
						},
						{
							id: 5,
							imgUrl: require("../../images/classify/classify05.png"),
							Text: "奶粉"
						},
						{
							id: 6,
							imgUrl: require("../../images/classify/classify06.png"),
							Text: "奶粉"
						},
						{
							id: 7,
							imgUrl: require("../../images/classify/classify07.png"),
							Text: "奶粉"
						},
						{
							id: 8,
							imgUrl: require("../../images/classify/classify08.png"),
							Text: "奶粉"
						},
						{
							id: 9,
							imgUrl: require("../../images/classify/classify10.png"),
							Text: "奶粉"
						},
						{
							id: 10,
							imgUrl: require("../../images/classify/classify11.png"),
							Text: "奶粉"
						},
						{
							id: 11,
							imgUrl: require("../../images/classify/classify12.png"),
							Text: "奶粉"
						},
						{
							id: 12,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "奶粉"
						}
					],
					[{
							id: 1,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 2,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 3,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 4,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 5,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 6,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 7,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 8,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 9,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 10,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 11,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						},
						{
							id: 12,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "护肤"
						}
					],
					[{
							id: 1,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 2,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 3,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 4,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 5,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 6,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 7,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 8,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 9,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 10,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 11,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						},
						{
							id: 12,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "家居生活"
						}
					],
					[{
							id: 1,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 2,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 3,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 4,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 5,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 6,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 7,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 8,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 9,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 10,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 11,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						},
						{
							id: 12,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "食品营养"
						}
					],
					[{
							id: 1,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 2,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 3,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 4,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 5,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 6,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 7,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 8,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 9,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 10,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 11,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						},
						{
							id: 12,
							imgUrl: require("../../images/classify/classify01.png"),
							Text: "全球直邮"
						}
					]
				]
			}
		},
		methods: {
			onClick(i) {
				this.clickEvent =true
				if(!event._constructed) {
					return
				} else {
					var right = this.$refs.wrapperList
					var el = right[i]
					this.rights.scrollToElement(el, 100)
				}

			},
			initScroll() {

				this.lefts = new BScroll(this.$refs.slideBar, {
					click: true
				})
				this.rights = new BScroll(this.$refs.wrapper, {
					probetype: 3,
					click: true
				})
				this.rights.on('scroll', (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y))
				})
				//				console.log(lefts)
			},
			getheight() {
				let itemHeight = this.$refs.wrapperList
				let height = 0
				for(let i = 0; i <= itemHeight.length - 1; i++) {
					height += itemHeight[i].clientHeight
					this.listHeight.push(height)
				}
				//				console.log(this.listHeight)
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.getheight()
				this.initScroll()
			})
		},
		computed: {
			active() {
				for(var i = 0; i < this.listHeight.length - 1; i++) {
					var h1 = this.listHeight[i]
					var h2 = this.listHeight[i + 1]

					if(this.scrollY >= h1 && this.scrollY < h2) {
						return i
					}
					if(this.scrollY >= this.listHeight[this.listHeight.length - 1]) {
						return 0
					}
				}
			}
		}
	}
</script>
<style scoped>
	.Classify {
		padding-bottom: 106px;
	}
	
	.Classify .abc {
		height: 106px;
	}
	
	.header {
		background: #ff9900;
		width: 100%;
		height: 106px;
		overflow: hidden;
		position: fixed;
		top: 0;
		z-index: 88;
	}
	
	.header .search {
		position: absolute;
		top: 20px;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.wrapper {
		height: 1620px;
	}
	
	.main {
		display: flex;
	}
	
	.slideBar {
		width: 14rem;
	}
	
	.slideBar ul {
		position: fixed;
		left: 0;
	}
	
	.slideBar ul li {
		border-left: 10px solid #fff;
		width: 220px;
		height: 94px;
		line-height: 94px;
		text-align: center;
		font-size: 28px;
		color: #333333;
		/*position: absolute;
		left: 0;*/
	}
	
	.slideBar ul li.on {
		color: #ff9900;
		border-left: 10px solid #1d84a7;
	}
	
	.wrapper ul {
		/*height: 1620px;
		overflow: hidden;*/
		/*display: none;*/
	}
	
	.wrapper ul li {}
	
	.wrapper ol {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.wrapper ol li {
		width: 230px;
		height: 238px;
		border: 2px solid #1d84a7;
		border-radius: 6px;
		margin: 24px 10px 0px;
	}
	
	.wrapper ol li .img {
		position: relative;
		height: 188px;
		width: inherit;
	}
	
	.wrapper ol li .img img {
		width: 170px;
		height: 171px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	
	.wrapper ol li .text {
		height: 50px;
		width: 100%;
		line-height: 56px;
		text-align: center;
		font-size: 24px;
		color: #fff;
		background: #1d84a7;
	}
</style>