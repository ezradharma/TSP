import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/FrontPage'><div>FrontPage</div></Link>
		<Link to='/SplashPage'><div>SplashPage</div></Link>
		<Link to='/MainPageNoAccount'><div>MainPageNoAccount</div></Link>
		<Link to='/SearchWalmart'><div>SearchWalmart</div></Link>
		<Link to='/SearchA'><div>SearchA</div></Link>
		<Link to='/SearchAFilterName'><div>SearchAFilterName</div></Link>
		<Link to='/SearchAFilterLowest'><div>SearchAFilterLowest</div></Link>
		<Link to='/SearchAFilterHighest'><div>SearchAFilterHighest</div></Link>
		<Link to='/Signup'><div>Signup</div></Link>
		<Link to='/Login'><div>Login</div></Link>
		<Link to='/MainPageWithAccount'><div>MainPageWithAccount</div></Link>
		<Link to='/StoreRatePageWithAccount'><div>StoreRatePageWithAccount</div></Link>
		<Link to='/StoreRateHistoricalPageWithAccount'><div>StoreRateHistoricalPageWithAccount</div></Link>
		<Link to='/WalmartRatesPage'><div>WalmartRatesPage</div></Link>
		<Link to='/GapRatesPage'><div>GapRatesPage</div></Link>
		<Link to='/HomeDepotRatesPage'><div>HomeDepotRatesPage</div></Link>
		<Link to='/KohlsRatesPage'><div>KohlsRatesPage</div></Link>
		<Link to='/HotelsComRatesPage'><div>HotelsComRatesPage</div></Link>
	</div>
	)
}