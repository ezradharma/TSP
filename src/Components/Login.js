import React from 'react'
import './Login.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Login () {
	return (
		<div className='Login_Login'>
			<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
			
			<div className='FieldBar'>
				<div className='Rectangle1'/>
				<img className='Subtract' src = {ImgAsset.Login_Subtract} />
			</div>
			
			<div className='FieldBar_1'>
				<div className='Rectangle1_1'/>
				<img className='Subtract_1' src = {ImgAsset.Login_Subtract_1} />
			</div>
			<span className='Username'>USERNAME</span>
			<Link to='/MainPageWithAccount'>
				<div className='FieldBar_2'>
					<div className='Rectangle1_2'/>
					<img className='Subtract_2' src = {ImgAsset.Login_Subtract_2} />
				</div>
				<span className='Login_1'>Login</span>
			</Link>
			<span className='Password'>PASSWORD</span>
			
			<span className='Logintofindyourpersonalizeddeals'>Login to find your personalized deals</span>
		</div>
	)
}