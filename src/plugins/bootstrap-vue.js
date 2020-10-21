import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BIcon, BIconCloudFill, BIconPlayFill} from 'bootstrap-vue'

Vue.component('BIcon', BIcon)
Vue.component('BIconCloudFill', BIconCloudFill)
Vue.component('BIconPlayFill', BIconPlayFill)

Vue.use(BootstrapVue)
