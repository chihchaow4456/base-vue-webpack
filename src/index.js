import Vue from 'vue';
import App from './App';
import router from './router';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  mounted() {
    console.log('Hello vue');
  },
  components: { App },
  router,
  template: '<App/>',
});

// .$mount('#app');
