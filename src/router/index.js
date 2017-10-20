import { MbRouter } from 'mamba-websdk'

import Welcome from '../pages/welcome'
import ListProposals from '../pages/list-proposals'
import ProposalAccepted from '../pages/proposal-accepted'
import Payment from '../pages/payment'
import OtherPage from '../pages/other'

export default new MbRouter({
    routes: [
	{
	    path: '/',
	    component: Welcome
	},
	{
	    path: '/list_proposals',
	    component: Intro
	},
	{
	    path: '/proposal_accepted',
	    component: ProposalAccepted
	}
    ]
})
