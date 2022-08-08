import React from 'react'
import './StoreRatePageWithAccount.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function StoreRatePageWithAccount () {
	return (
		<div className='StoreRatePageWithAccount_StoreRatePageWithAccount'>
			<div className='RateGraph'>
				<span className='CurrentRatesforWalmart'>Current Rates for Walmart</span>
				<img className='StoreLogo' src = {ImgAsset.StoreRateHistoricalPageWithAccount_StoreLogo} />
				<div className='Rectangle41'/>
				<div className='Rectangle42'/>
				<span className='_'>%</span>
				<span className='_012345'>012345</span>
				<div className='Rectangle43'/>
				<div className='ServiceRate'>
					<span className='HooplaDoopla'>Hoopla Doopla</span>
					<div className='Rectangle44'/>
					<img className='ServiceLogo' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo} />
				</div>
				<div className='ServiceRate_1'>
					<span className='MaxRebates'>MaxRebates</span>
					<div className='Rectangle44_1'/>
					<img className='ServiceLogo_1' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_1} />
				</div>
				<div className='ServiceRate_2'>
					<span className='rebatesme'>rebatesme</span>
					<div className='Rectangle44_2'/>
					<img className='ServiceLogo_2' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_2} />
				</div>
				<div className='ServiceRate_3'>
					<span className='DollarDig'>Dollar Dig</span>
					<div className='Rectangle44_3'/>
					<img className='ServiceLogo_3' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_3} />
				</div>
				<div className='ServiceRate_4'>
					<span className='GoCashBack'>GoCashBack</span>
					<div className='Rectangle44_4'/>
					<img className='ServiceLogo_4' src = {ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_4} />
				</div>
				<div className='HistoricalMode'>
					<div className='Rectangle45'/>
					<Link to='/storeratehistoricalpagewithaccount'>
						<span className='HistoricalMode_1'>Historical Mode</span>
					</Link>
				</div>
			</div>
			<div className='TopBar'>
				<img className='Rectangle19' src = {ImgAsset.StoreRatePageWithAccount_Rectangle19} />
				<div className='Group1'>
					<Link to='/undefined'>
						<div className='SearchBarDesktop'>
							<div className='Rectangle1'/>
							<img className='Vector' src = {ImgAsset.StoreRatePageWithAccount_Vector} />
						</div>
					</Link>
				</div>
				<div className='Group4'>
					<div className='Rectangle21'/>
					<span className='USERNAME'>[USERNAME]</span>
					<Link to='/mainpagenoaccount'>
						<span className='__1'>|     Sign Out</span>
					</Link>
				</div>
				<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
				<Link to='/mainpagewithaccount'>
					<div className='MenuIcon'>
						<img className='Line1' src = {ImgAsset.StoreRatePageWithAccount_Line1} />
						<img className='Line2' src = {ImgAsset.StoreRatePageWithAccount_Line2} />
						<img className='Line3' src = {ImgAsset.StoreRatePageWithAccount_Line3} />
					</div>
				</Link>
				<Link to='/undefined'>
					<div className='FilterDropdownListDesktop'>
						<img className='Vector_1' src = {ImgAsset.StoreRatePageWithAccount_Vector_1} />
					</div>
				</Link>
			</div>
		</div>
	)
}