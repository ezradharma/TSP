import React from 'react'
import './StoreRateHistoricalPageWithAccount.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function StoreRateHistoricalPageWithAccount () {
	return (
		<div className='StoreRateHistoricalPageWithAccount_StoreRateHistoricalPageWithAccount'>
			<div className='RateGraph'>
				<span className='HistoricalRatesforWalmart'>Historical Rates for Walmart</span>
				<img className='StoreLogo' src = {ImgAsset.StoreRateHistoricalPageWithAccount_StoreLogo} />
				<div className='Rectangle41'/>
				<div className='Rectangle42'/>
				<span className='_'>%</span>
				<span className='_012345'>012345</span>
				<div className='Rectangle43'/>
				<div className='ServiceRate'>
					<span className='HooplaDoopla'>Hoopla Doopla</span>
					<img className='ServiceLogo' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo} />
				</div>
				<div className='ServiceRate_1'>
					<span className='MaxRebates'>MaxRebates</span>
					<img className='ServiceLogo_1' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_1} />
				</div>
				<div className='ServiceRate_2'>
					<span className='rebatesme'>rebatesme</span>
					<img className='ServiceLogo_2' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_2} />
				</div>
				<div className='ServiceRate_3'>
					<span className='DollarDig'>Dollar Dig</span>
					<img className='ServiceLogo_3' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_3} />
				</div>
				<div className='ServiceRate_4'>
					<span className='GoCashBack'>GoCashBack</span>
					<img className='ServiceLogo_4' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_4} />
				</div>
				<Link to='/storeratepagewithaccount'>
					<div className='CurrentMode'>
						<div className='Rectangle45'/>
						<span className='CurrentMode_1'>Current Mode</span>
					</div>
				</Link>
				<img className='Line5' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line5} />
				<span className='JanFebMarAprMayJunJulAugSeptOctNovDec'>Jan<br/>Feb<br/>Mar<br/>Apr<br/>May<br/>Jun<br/>Jul<br/>Aug<br/>Sept<br/>Oct<br/>Nov<br/>Dec</span>
				<img className='Line6' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line6} />
				<img className='Line7' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line7} />
				<img className='Line8' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line8} />
				<img className='Line9' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line9} />
				<img className='Line10' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line10} />
				<img className='Line11' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line11} />
				<img className='Line12' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line12} />
				<img className='Line13' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line13} />
				<img className='Line14' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line14} />
				<img className='Line15' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line15} />
				<img className='Line16' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line16} />
				<img className='Line17' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line17} />
			</div>
			<div className='TopBar'>
				<img className='Rectangle19' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Rectangle19} />
				<div className='Group1'>
					<Link to='/undefined'>
						<div className='SearchBarDesktop'>
							<div className='Rectangle1'/>
							<img className='Vector' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Vector} />
						</div>
					</Link>
					<Link to='/undefined'>
						<div className='FilterDropdownListDesktop'>
							<img className='Vector_1' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Vector_1} />
						</div>
					</Link>
				</div>
				<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
				<div className='Group4'>
					<div className='Rectangle21'/>
					<span className='USERNAME'>[USERNAME]</span>
					<Link to='/mainpagenoaccount'>
						<span className='__1'>|     Sign Out</span>
					</Link>
				</div>
				<Link to='/mainpagewithaccount'>
					<div className='MenuIcon'>
						<img className='Line1' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line1} />
						<img className='Line2' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line2} />
						<img className='Line3' src = {ImgAsset.StoreRateHistoricalPageWithAccount_Line3} />
					</div>
				</Link>
			</div>
		</div>
	)
}