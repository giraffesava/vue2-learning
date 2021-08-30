import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import components from '@/Components/UI/'
import router from '@/router/router'
import directives from '@/directives/'
Vue.config.productionTip = false

Vue.use(VueRouter)

components.forEach(component => {
  Vue.component(component.name, component)
})

directives.forEach(directive => {
  Vue.directive(directive.name, directive)
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
