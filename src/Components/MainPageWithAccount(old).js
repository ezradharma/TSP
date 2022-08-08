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
				
				<div className='Rectangle31'/>
				<div className='Rectangle32'/>
				<span className='BestRate2'>Best Rate 2%</span>
				<span className='Gap'>Gap</span>
				<div className='Rectangle34'/>
				<div className='iconstarempty'>
					<img className='Vector' src = {ImgAsset.MainPageWithAccount_Vector} />
				</div>
				<span className='HomeDepot'>Home Depot</span>
				
				<div className='Rectangle33'/>
				<div className='iconstarempty_1'>
					<img className='Vector_1' src = {ImgAsset.MainPageWithAccount_Vector_1} />
				</div>
				<span className='Costco'>Costco</span>
				<div className='Rectangle36'/>
				<span className='Hotelscom'>Hotels.com</span>
				<div className='Rectangle37'/>
				<div className='iconstarempty_2'>
					<img className='Vector_2' src = {ImgAsset.MainPageWithAccount_Vector_2} />
				</div>
				<span className='Target'>Target</span>
				<div className='Rectangle38'/>
				<div className='iconstarempty_3'>
					<img className='Vector_3' src = {ImgAsset.MainPageWithAccount_Vector_3} />
				</div>
				<span className='Kohls'>Kohls</span>
				<img className='Amazon1' src = {ImgAsset.MainPageWithAccount_Amazon1} />
				<img className='Costco1' src = {ImgAsset.MainPageWithAccount_Costco1} />
				<img className='HomeDepot1' src = {ImgAsset.MainPageWithAccount_HomeDepot1} />
				<img className='GapLogo1' src = {ImgAsset.MainPageWithAccount_GapLogo1} />
				<img className='Hotels1' src = {ImgAsset.MainPageWithAccount_Hotels1} />
				<img className='Target21' src = {ImgAsset.MainPageWithAccount_Target21} />
				<img className='KholsLogo1' src = {ImgAsset.MainPageWithAccount_KholsLogo1} />
				<span className='Amazon'>Amazon</span>
				<span className='BestRate3'>Best Rate 3%</span>
				<Link to='/storeratepagewithaccount'>
					<div className='Group3'>
						<img className='Rectangle35' src = {ImgAsset.MainPageWithAccount_Rectangle35} />
						<span className='Walmart'>Walmart</span>
						<img className='Walmart1' src = {ImgAsset.SearchWalmart_Walmart1} />
						<span className='BestRate42'>Best Rate 4.2%</span>
					</div>
				</Link>
				<span className='BestRate5'>Best Rate 5%</span>
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