import './welcome.scss'
import template from './welcome.html'
import { Native } from 'mamba-websdk'

export default {
    template,
    onCreate () {
	let Keyboard = Native.Keyboard
	let input = this.$refs['input'].el
	let btn = this.$refs['button'].el
	let router = this.$router

	input.onfocus = (e) => Keyboard.setKeyboardAsNumeric()
	btn.onclick = function () {
	    router.push('/delivery')
	}
    }
}
