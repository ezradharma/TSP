import React from 'react'
import './SearchA.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function SearchA () {
	return (
		<div className='SearchA_SearchA'>
			<img className='Rectangle3' src = {ImgAsset.SearchA_Rectangle3} />
			<div className='Amazon'>
				<img className='Vector' src = {ImgAsset.SearchA_Vector} />
				<img className='Vector_1' src = {ImgAsset.SearchA_Vector_1} />
				<img className='Vector_2' src = {ImgAsset.SearchA_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.SearchA_Vector_3} />
				<img className='Vector_4' src = {ImgAsset.SearchA_Vector_4} />
				<img className='Vector_5' src = {ImgAsset.SearchA_Vector_5} />
				<img className='Vector_6' src = {ImgAsset.SearchA_Vector_6} />
				<img className='Vector_7' src = {ImgAsset.SearchA_Vector_7} />
				<img className='Vector_8' src = {ImgAsset.SearchA_Vector_8} />
				<img className='Vector_9' src = {ImgAsset.SearchA_Vector_9} />
			</div>
			<span className='Amazon_1'>Amazon</span>
			<img className='Vector_10' src = {ImgAsset.SearchA_Vector_10} />
			<img className='Rectangle4' src = {ImgAsset.SearchA_Rectangle4} />
			<img className='Rectangle5' src = {ImgAsset.SearchA_Rectangle5} />
			<img className='Rectangle6' src = {ImgAsset.SearchA_Rectangle6} />
			<img className='Vector_11' src = {ImgAsset.SearchA_Vector_11} />
			<span className='Apple'>Apple</span>
			<img className='Vector_12' src = {ImgAsset.SearchA_Vector_12} />
			<div className='Group'>
				<img className='Vector_13' src = {ImgAsset.SearchA_Vector_13} />
			</div>
			<span className='Abercrombie'>Abercrombie</span>
			<img className='Vector_14' src = {ImgAsset.SearchA_Vector_14} />
			<div className='Group_1'>
				<img className='Vector_15' src = {ImgAsset.SearchA_Vector_15} />
				<img className='Vector_16' src = {ImgAsset.SearchA_Vector_16} />
				<img className='Vector_17' src = {ImgAsset.SearchA_Vector_17} />
				<img className='Vector_18' src = {ImgAsset.SearchA_Vector_18} />
				<img className='Vector_19' src = {ImgAsset.SearchA_Vector_19} />
			</div>
			<span className='Adidas'>Adidas</span>
			<img className='Vector_20' src = {ImgAsset.SearchA_Vector_20} />
			<span className='BestRate7'>Best Rate: 7%</span>
			<span className='BestRate5'>Best Rate: 5%</span>
			<span className='BestRate4'>Best Rate: 4%</span>
			<span className='BestRate11'>Best Rate: 11%</span>
			<div className='TopBar'>
				<img className='Rectangle19' src = {ImgAsset.SearchA_Rectangle19} />
				<div className='Group1'>
					<Link to='/undefined'>
						<div className='SearchBarDesktop'>
							<div className='Rectangle1'/>
							<img className='Vector_21' src = {ImgAsset.SearchA_Vector_21} />
						</div>
					</Link>
					<Link to='/undefined'>
						<div className='FilterDropdownListDesktop'>
							<img className='Vector_22' src = {ImgAsset.SearchA_Vector_22} />
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
						<img className='Line1' src = {ImgAsset.SearchA_Line1} />
						<img className='Line2' src = {ImgAsset.SearchA_Line2} />
						<img className='Line3' src = {ImgAsset.SearchA_Line3} />
					</div>
				</Link>
			</div>
		</div>
	)
}