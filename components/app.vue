<template>
	<main>
		<header>
			<nav class="nav">
				<a class="navLogo" href="/">fall <span>project</span></a>
				<button class="toggleMenu textIcon" @click="revert">
					<svg class="textIcon">
						<use xlink:href="../assets/icons.svg#menu"/>
					</svg>
				</button>
				<nav class="links" v-show="showMenu">
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
			<div>
				<nav class="buttons">
					<a href="" class="button">
						<svg class="buttonIcon">
							<use xlink:href="/assets/icons.svg#github" />
						</svg>
						GitHub
					</a>
					<a href="" class="button">Contact</a>
				</nav>
			</div>
		</header>
		<div class="section projects">
			<card v-for="card in vData.cards" :dat="card" :key="card.title"></card>
		</div>
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
			revert: function() { this.showMenu = !this.showMenu; }
		},
		data: function() {
			return {
				showMenu: true, 
				innerWidth: window.innerWidth
			}
		},
		created() {
			this.showMenu = menu()
		},
		components: { card },
		watch: {
			innerWidth: () => {menu()}
		}
	}
</script>

<style lang="sass">
@import "comp.sass"
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700')
</style>
