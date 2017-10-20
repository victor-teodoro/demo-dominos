import './delivery.scss'
import template from './delivery.html'
import { Native } from 'mamba-websdk'

export default {
    template,
    onCreate () {
	let Keyboard = Native.Keyboard
	let btn1 = this.$refs['delivery-btn1'].el
	let btn2 = this.$refs['delivery-btn2'].el
	let router = this.$router

	btn1.onclick = function () {
	    router.sharedData = {valor: 3200};
	    router.push('/payment');
	}
	btn2.onclick = function () {
	    router.sharedData = {valor: 3400};
	    router.push('/payment');
	}
    }
}
