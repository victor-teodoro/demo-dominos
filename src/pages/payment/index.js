import './payment.scss'
import template from './payment.html'
import Tools from '../../shared/tools'
import { Native } from 'mamba-websdk'

const Payment = Native.MbPayment;
let success = false;

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
	const handshakeButton = this.$refs['handshake-button'].el;
	const printArea = this.$refs['print-area'];

	setInterval(function(){
	    let xhttp = Tools.configureHttpReq('ravTotal advance', 'https://solutions-api.herokuapp.com/garantia_handshake')
	    xhttp.onreadystatechange = response => {
		console.log('Estou aqui!');
		if (xhttp.readyState === 4) {
		    if (xhttp.status === 200) {
			// get body data
			let needsHandshake = JSON.parse(response.srcElement.response).needs_handshake;
			console.log(needsHandshake);

			if(needsHandshake) {
			    success = true;
			    printArea.print(this.printObject, err => {
				if (err === undefined) {
				    //router.push('/');
				} else {
				    console.log('Printing error!');
				}
			    });
			}
		    } else {
			Tools.displayServerError(this.el)
		    }
		}
	    }    
	    xhttp.send(JSON.stringify({source: 'mamba'}));
	}, 1000);
    }
}
