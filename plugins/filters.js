import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', (val) => moment(new Date(val)).format('LL'))
Vue.filter('hourFormat', (val) => `${moment(new Date(val)).format('LT')}`)
