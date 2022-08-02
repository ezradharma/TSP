import React from 'react'
import './SearchWalmart.css'
import './style.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'

export default function HomeDepotRates () {
    return (
        <>
        <div className='SearchWalmart_SearchWalmart'>
        	<div className='TopBar'>
				<img className='Rectangle19' src = {ImgAsset.SearchWalmart_Rectangle19} />
				<div className='Group1'>
					<Link to='/undefined'>
						<div className='SearchBarDesktop'>
							<div className='Rectangle1'/>
							<img className='Vector_1' src = {ImgAsset.SearchWalmart_Vector_1} />
						</div>
					</Link>
					<Link to='/undefined'>
						<div className='FilterDropdownListDesktop'>
							<img className='Vector_2' src = {ImgAsset.SearchWalmart_Vector_2} />
						</div>
					</Link>
				</div>
				<div className='Group4'>
					<div className='Rectangle21'/>
					<span className='USERNAME'>[USERNAME]</span>
					<Link to='/mainpagenoaccount'>
						<span className='_'>|     Sign Out</span>
					</Link>
				</div>
				<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
				<Link to='/mainpagewithaccount'>
					<div className='MenuIcon'>
						<img className='Line1' src = {ImgAsset.SearchWalmart_Line1} />
						<img className='Line2' src = {ImgAsset.SearchWalmart_Line2} />
						<img className='Line3' src = {ImgAsset.SearchWalmart_Line3} />
					</div>
				</Link>
			</div>
            <div id="wrap">
            <img class="Charts" src={ImgAsset.HomeDepotGraph}/>
                <div class="reward-plats container center">
                    <div>
                        <img src={ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo} />
                        <span>Hoopla Doopla</span><br/>
                        <span>Best Rates: 5%</span>
                        <a href="https://hoopladoopla.com/brand/home-depot?ref=VmQlavLryexqNoGMBARzx7AwYWkZJd5bj4z2EnRD">
                            <i class='fas'>&#xf105;</i>
                        </a>
                    </div>
                    <div>
                        <img src={ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_1} />
                        <span>MaxRebates</span><br/>
                        <span>Best Rates: 4%</span>
                        <a href="https://www.maxrebates.com/us/stores/home-depot?t=cashbackmonitor&invited_code=8251963">
                            <i class='fas'>&#xf105;</i>
                        </a>
                    </div>
                    <div>
                        <img src={ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_2} />
                        <span>rebatesme</span><br/>
                        <span>Best Rates: 4%</span>
                        <a href="https://www.cashbackmonitor.com/go-to/RebatesMe/home-depot">
                            <i class='fas'>&#xf105;</i>
                        </a>
                    </div>
                    <div>
                        <img src={ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_3} />
                        <span>Dollar Dig</span><br/>
                        <span>Best Rates: 4%</span>
                        <a href="https://www.dollardig.com/store/home-depot/?ref=1000010652">
                            <i class='fas'>&#xf105;</i>
                        </a>
                    </div>
                    <div>
                        <img src={ImgAsset.StoreRateHistoricalPageWithAccount_ServiceLogo_4} />
                        <span>GoCashBack</span><br/>
                        <span>Best Rates: 3%</span>
                        <a href="https://www.gocashback.com/r/1360354?url=https%3A%2F%2Fwww.gocashback.com%2Fstores%2Fhomedepot">
                            <i class='fas'>&#xf105;</i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}