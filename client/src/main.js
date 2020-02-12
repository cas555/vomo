import Vue from 'vue'
import App from './App.vue'
import AppDropdown from './components/shared/AppDropdown'
import AppHero from './components/shared/AppHero'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false


Vue.component('AppHero', AppHero)
Vue.component('AppDropdown', AppDropdown)

new Vue({
  render: h => h(App),
}).$mount('#app')
