import React from 'react'
import './SearchWalmart.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function SearchWalmart () {
	return (
		<div className='SearchWalmart_SearchWalmart'>
			<Link to='/storeratepagewithaccount'>
				<div className='SearchBarRateBoxDesktop'>
					<img className='Rectangle2' src = {ImgAsset.SearchWalmart_Rectangle2} />
					<span className='Walmart'>Walmart</span>
					<img className='Vector' src = {ImgAsset.SearchWalmart_Vector} />
					<img className='Walmart1' src = {ImgAsset.SearchWalmart_Walmart1} />
				</div>
			</Link>
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
		</div>
	)
}