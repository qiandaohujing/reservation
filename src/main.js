import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import { getToken } from './utils/token';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const role = JSON.parse(localStorage.getItem('user'))
  if (!getToken() && to.path !== '/login') {
    next('/login')
  }
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')