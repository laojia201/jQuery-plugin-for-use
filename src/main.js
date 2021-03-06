import Vue from 'vue'
import App from './App.vue'
import JqContext from "jquery-contextmenu";
import jstree from "jstree"

import "jquery-contextmenu/dist/jquery.contextMenu.css"
import "jstree/dist/themes/default/style.css"

Vue.use(JqContext)
Vue.use(jstree)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
