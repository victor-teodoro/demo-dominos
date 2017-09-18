import { MbRouter } from 'mamba-websdk'

import Welcome from '../pages/welcome'
import Intro from '../pages/intro'
import Delivery from '../pages/delivery'
import Payment from '../pages/payment'
import OtherPage from '../pages/other'

export default new MbRouter({
    routes: [
	{
	    path: '/',
	    component: Welcome
	},
	{
	    path: '/intro',
	    component: Intro
	},
	{
	    path: '/delivery',
	    component: Delivery
	},
	{
	    path: '/payment',
	    component: Payment
	},
	{
	    path: '/other-cool-feature',
	    component: OtherPage
	}
    ]
})
