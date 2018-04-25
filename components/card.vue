<template>
	<div class="card" :style="{backgroundImage: dat.background, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}">
		<h1 class="cardTitle">
			{{ dat.title }}
			<a v-for="link in dat.links" :href="link.url" class="cardIcon">
				<svg class="textIcon">
					<use :xlink:href="'../assets/icons.svg#'+link.icon"/>
				</svg>
			</a>
		</h1>
		<p class="cardText"> {{ dat.text }} </p>
	</div>
</template>
<script>
export default {
	name: 'card',
	props: {
		dat: Object
	}
}
</script>

