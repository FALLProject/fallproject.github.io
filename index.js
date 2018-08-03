import Vue from 'vue'
import appView from './components/app.vue'


Vue.config.devtools = true
var app = new Vue({
	el: '.app',
	template: `<appView :vData="$data"/>`,
	data: {
		cards: [
			{ title: 'FallView', text: "a lightweight vue alternative", links: [{ url: 'https://github.com/SimplyCodin/FallView/tree/POC', icon: 'github' }], background: 'assets/FallView.svg' },
			{ title: 'FallDirGen', text: "a file scaffolding engine", links: [{ url: 'https://github.com/FALLProject/FallDirGen', icon: 'github' }], background: 'assets/FallDirGen.svg' }
		]
	},
	components: { appView }
})
window.app = app