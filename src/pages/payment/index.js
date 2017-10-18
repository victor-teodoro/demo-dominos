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
	let authorizeButton = document.getElementById('authorize-button');
	let valorDoPedido = document.getElementById('valor-do-pedido');
	const filipetaPedido = this.$refs['filipeta-pedido'];
	const filipetaParceiro = this.$refs['filipeta-parceiro'];
	const filipetaAmbev = this.$refs['filipeta-ambev'];

	// Make buttons invisible
	valorDoPedido.style.visibility = 'hidden';

	// Define os onclicks
	authorizeButton.onclick = onclicks;

	function onclicks() {
	    filipetaParceiro.print(this.printObject, err => {
		if (err === undefined) {
		    // Make buttons invisible
		    authorizeButton.innerHTML = 'Via da Ambev';
		    authorizeButton.onclick = function () {
			filipetaAmbev.print(this.printObject, err => {
			    if (err === undefined) {
				// Make buttons invisible
				authorizeButton.innerHTML = 'Sucesso!';
			    } else {
				console.log('Printing error!');
			    }
			});
		    }
		} else {
		    console.log('Printing error!');
		}
	    });
	}

	setInterval(function(){
	    let xhttp = Tools.configureHttpReq('ravTotal advance', 'https://solutions-api.herokuapp.com/garantia_handshake')
	    xhttp.onreadystatechange = response => {
		//console.log('Estou aqui!');
		if (xhttp.readyState === 4) {
		    if (xhttp.status === 200) {
			// get body data
			let needsHandshake = JSON.parse(response.srcElement.response).needs_handshake;
			//console.log(needsHandshake);

			if(needsHandshake) {
			    success = true;
			    filipetaPedido.print(this.printObject, err => {
				if (err === undefined) {
				    // Make buttons invisible
				    valorDoPedido.style.visibility = 'visible';
				    authorizeButton.innerHTML = 'Autoriza Ambev?';
				    authorizeButton.onclick = onclicks;
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
