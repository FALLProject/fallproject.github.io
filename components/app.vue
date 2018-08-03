<template>
	<main>
		<header>
			<nav class="nav">
				<a class="navLogo" href="/">fall <span>project</span></a>
				<button class="toggleMenu textIcon" @click="revert">
					<svg class="textIcon" >
						<use v-if="showMenu == false" xlink:href="../assets/icons.svg#menu"/>
						<use v-if="showMenu == true" xlink:href="../assets/icons.svg#close"/>
					</svg>
				</button>	
				<nav class="links" v-show="showMenu" @click="revert">
					<a href="">About</a>
					<a href="">Docs</a>
					<a href="">
						<svg class="textIcon">
							<use xlink:href="/assets/icons.svg#github"/>
						</svg>
						GitHub
					</a>
				</nav>
			</nav>
			<nav class="buttons">
				<a href="" class="button">
					<svg class="buttonIcon">
						<use xlink:href="/assets/icons.svg#github"/>
					</svg>
					GitHub
				</a>
				<a href="" class="button">Contact</a>
			</nav>
		</header>
		<section class="grid">
		<div class="section services">
			<card v-for="service in services" :dat="service" :key="service.title"></card>
		</div>
		<div class="section projects" hidden>
			<card v-for="card in vData.cards" :dat="card" :key="card.title"></card>
		</div>
		</section>
	</main>
</template>

<script>
	var menu = function() { return window.innerWidth > 768}
	import card from './card.vue'
	export default {
		name: 'appView',
		props: {
			vData: Object
		},
		methods: {
			revert() {this.showMenu = !this.showMenu;}
		},
		data: function() {
			return {
				showMenu: true,
				innerWidth: window.innerWidth,
				services: [
					{
						title: "Design",
						text: "Branding, Mobile, and Web Design",
						links: [],
						background: 'assets/design_graphic.svg',
						square: true,
						weight: 'bold'
					},
					{
						title: "Coding",
						text: "Web and Backend",
						links: [],
						background: 'assets/undraw_coding.svg',
						square: true,
						weight: 'bold'
					}
				]
			}
		},
		created() {
			this.showMenu = menu()
		},
		components: { card },
		watch: {
			innerWidth: () => {this.showMenu = menu()}
		}
	}
</script>

<style lang="sass">
@import "comp.sass"
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700')
</style>
