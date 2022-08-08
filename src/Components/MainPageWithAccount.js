import React from 'react'
import './MainPageWithAccount.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function MainPageWithAccount () {
	return (
		<div className='MainPageWithAccount_MainPageWithAccount'>
			<div className='Rectangle39'/>
			<div className='Rectangle40'/>
			<span className='Recommendedforyou'>Recommended for you</span>
			<div className='Frame1'>
				<Link to='/TargetRatesPage'>
					<div className='Target'>
						<div className='Rectangle37'/>
						<div className='iconstarempty'>
							<img className='Vector' src = {ImgAsset.MainPageWithAccount_Vector} />
						</div>
						<span className='Target_1'>Target</span>
						<img className='Target21' src = {ImgAsset.MainPageWithAccount_Target21} />
					</div>
				</Link>
				<Link to='/WalmartRatesPage'>
					<div className='Walmart'>
						<div className='Rectangle37_1'/>
						<span className='Walmart_1'>Walmart</span>
						<img className='Walmart1' src = {ImgAsset.SearchWalmart_Walmart1} />
						<span className='BestRate42'>Best Rate 4.2%</span>
					</div>
				</Link>
				<Link to='/HotelsComRatesPage'>
					<div className='Hotels'>
						<div className='Rectangle36'/>
						<span className='BestRate3'>Best Rate 3%</span>
						<span className='Hotelscom'>Hotels.com</span>
						<img className='Hotels1' src = {ImgAsset.MainPageWithAccount_Hotels1} />
					</div>
				</Link>
				<Link to='/KohlsRatesPage'>
					<div className='Kohls'>
						<div className='Rectangle38'/>
						<div className='iconstarempty_1'>
							<img className='Vector_1' src = {ImgAsset.MainPageWithAccount_Vector_1} />
						</div>
						<span className='Kohls_1'>Kohls</span>
						<img className='KholsLogo1' src = {ImgAsset.MainPageWithAccount_KholsLogo1} />
					</div>
				</Link>
				<Link to='/GapRatesPage'>
					<div className='Gap'>
						<div className='Rectangle32'/>
						<span className='BestRate2'>Best Rate 2%</span>
						<span className='Gap_1'>Gap</span>
						<img className='GapLogo1' src = {ImgAsset.MainPageWithAccount_GapLogo1} />
					</div>
				</Link>
				<Link to='/AmazonRatesPage'>
					<div className='Amazon'>
						<div className='Rectangle31'/>
						<span className='BestRate5'>Best Rate 5%</span>
						<span className='Amazon_1'>Amazon</span>
						<img className='Amazon1' src = {ImgAsset.MainPageWithAccount_Amazon1} />
					</div>
				</Link>
				<Link to='/CostcoRatesPage'>
					<div className='Costco'>
						<div className='Rectangle33'/>
						<div className='iconstarempty_2'>
							<img className='Vector_2' src = {ImgAsset.MainPageWithAccount_Vector_2} />
						</div>
						<span className='Costco_1'>Costco</span>
						<img className='Costco1' src = {ImgAsset.MainPageWithAccount_Costco1} />
					</div>
				</Link>
				<Link to='/HomeDepotRatesPage'>
					<div className='HomeDepot'>
						<div className='Rectangle34'/>
						<div className='iconstarempty_3'>
							<img className='Vector_3' src = {ImgAsset.MainPageWithAccount_Vector_3} />
						</div>
						<span className='HomeDepot_1'>Home Depot</span>
						<img className='HomeDepot1' src = {ImgAsset.MainPageWithAccount_HomeDepot1} />
					</div>
				</Link>
			</div>
			<span className='YourFavorites'>Your Favorites</span>
			<img className='Rectangle19' src = {ImgAsset.MainPageWithAccount_Rectangle19} />
			<div className='MenuIcon'>
				<img className='Line1' src = {ImgAsset.MainPageWithAccount_Line1} />
				<img className='Line2' src = {ImgAsset.MainPageWithAccount_Line2} />
				<img className='Line3' src = {ImgAsset.MainPageWithAccount_Line3} />
			</div>
			<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
			<div className='Group4'>
				<div className='Rectangle21'/>
				<span className='USERNAME'>[USERNAME]</span>
				<Link to='/mainpagenoaccount'>
					<span className='_'>|     Sign Out</span>
				</Link>
			</div>
			<Link to='/undefined'>
				<div className='SearchBarDesktop'>
					<div className='Rectangle1'/>
					<img className='Vector_4' src = {ImgAsset.MainPageWithAccount_Vector_4} />
				</div>
			</Link>
			<Link to='/undefined'>
				<div className='FilterDropdownListDesktop'>
					<img className='Vector_5' src = {ImgAsset.MainPageWithAccount_Vector_5} />
				</div>
			</Link>
		</div>
	)
}