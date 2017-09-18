import './payment.scss'
import template from './payment.html'
import { Native } from 'mamba-websdk'

const Payment = Native.MbPayment

export default {
    template,
    state () {
	return {
	    printObject: {
		user_dithering: false,
		scale_to_paper_width: true
	    }
	}
    },
    onMount () {
	const router = this.$router;
	const printArea = this.$refs['print-area'];
	const callback1 = function() {
	    printArea.print(this.printObject, err => {
		console.log(err)
	    })
	    router.push('/');
	}
	Payment.enableCardEvent();
	console.log(router.sharedData.valor);
	document.addEventListener('oncardevent', _ => Payment.pay(router.sharedData.valor, callback1));
    },
    onUnmount () {
	Payment.disableCardEvent()
	document.removeEventListener('oncardevent', this.cardEventFunction)
    }
}
