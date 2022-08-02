import React from 'react'
import './MainPageNoAccount.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function MainPageNoAccount () {
	return (
		<div className='MainPageNoAccount_MainPageNoAccount'>
			<Link to='/frontpage'>
			<div className='Frame1'>
				<div className='Rectangle31'/>
				<div className='Rectangle32'/>
				<div className='iconstarempty'>
					<img className='Vector' src = {ImgAsset.MainPageNoAccount_Vector} />
				</div>
				<span className='Gap'>Gap</span>
				<div className='Rectangle34'/>
				<div className='iconstarempty_1'>
					<img className='Vector_1' src = {ImgAsset.MainPageNoAccount_Vector_1} />
				</div>
				<span className='HomeDepot'>Home Depot</span>
				<div className='Rectangle33'/>
				<div className='iconstarempty_2'>
					<img className='Vector_2' src = {ImgAsset.MainPageNoAccount_Vector_2} />
				</div>
				<span className='Costco'>Costco</span>
				<div className='Rectangle36'/>
				<div className='iconstarempty_3'>
					<img className='Vector_3' src = {ImgAsset.MainPageNoAccount_Vector_3} />
				</div>
				<span className='Hotelscom'>Hotels.com</span>
				<div className='Rectangle37'/>
				<div className='iconstarempty_4'>
					<img className='Vector_4' src = {ImgAsset.MainPageNoAccount_Vector_4} />
				</div>
				<span className='Target'>Target</span>
				<div className='Rectangle38'/>
				<div className='iconstarempty_5'>
					<img className='Vector_5' src = {ImgAsset.MainPageNoAccount_Vector_5} />
				</div>
				<span className='Kohls'>Kohls</span>
				<img className='Amazon1' src = {ImgAsset.MainPageWithAccount_Amazon1} />
				<Link to='/frontpage'>
					<div className='Walmart'>
						<div className='Rectangle35'/>
						<div className='iconstarempty_6'>
							<img className='Vector_6' src = {ImgAsset.MainPageNoAccount_Vector_6} />
						</div>
						<span className='Walmart_1'>Walmart</span>
						<img className='Walmart1' src = {ImgAsset.SearchWalmart_Walmart1} />
					</div>
				</Link>
				<img className='Costco1' src = {ImgAsset.MainPageWithAccount_Costco1} />
				<img className='HomeDepot1' src = {ImgAsset.MainPageWithAccount_HomeDepot1} />
				<img className='GapLogo1' src = {ImgAsset.MainPageWithAccount_GapLogo1} />
				<img className='Hotels1' src = {ImgAsset.MainPageWithAccount_Hotels1} />
				<img className='Target21' src = {ImgAsset.MainPageWithAccount_Target21} />
				<img className='KholsLogo1' src = {ImgAsset.MainPageWithAccount_KholsLogo1} />
				<span className='Amazon'>Amazon</span>
				<div className='iconstarempty_7'>
					<img className='Vector_7' src = {ImgAsset.MainPageNoAccount_Vector_7} />
				</div>
			</div>
			</Link>
			<img className='Rectangle19' src = {ImgAsset.MainPageNoAccount_Rectangle19} />
			<div className='MenuIcon'>
				<img className='Line1' src = {ImgAsset.MainPageNoAccount_Line1} />
				<img className='Line2' src = {ImgAsset.MainPageNoAccount_Line2} />
				<img className='Line3' src = {ImgAsset.MainPageNoAccount_Line3} />
			</div>
			<div className='Group1'>
				<div className='Rectangle20'/>
				<img className='Vector_8' src = {ImgAsset.MainPageNoAccount_Vector_8} />
			</div>
			<Link to='/frontpage'>
				<div className='Group2'>
					<div className='Rectangle21'/>
					<span className='LogIn'>Log In | Sign Up</span>
				</div>
			</Link>
			<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
			<div className='FilterDropdownListDesktop'>
				<img className='Vector_9' src = {ImgAsset.MainPageNoAccount_Vector_9} />
			</div>
		</div>
	)
}