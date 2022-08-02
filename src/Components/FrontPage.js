import React from 'react'
import './FrontPage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function FrontPage () {
	return (
		<div className='FrontPage_FrontPage'>
			<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
			<span className='WelcometoTheSavingPortalLoginorSignup'>Welcome to The Saving Portal! Login or Sign up</span>
			<Link to='/login'>
				<div className='FieldBar'>
					<div className='Rectangle1'/>
					<img className='Subtract' src = {ImgAsset.FrontPage_Subtract} />
					<span className='Login'>Login</span>
				</div>
			</Link>
			<Link to='/signup'>
				<div className='FieldBar_1'>
					<div className='Rectangle1_1'/>
					<span className='Signup'>Signup</span>
					<img className='Subtract_1' src = {ImgAsset.FrontPage_Subtract_1} />
				</div>
			</Link>
			<Link to='/mainpagenoaccount'>
				<div className='FieldBar_2'>
					<div className='Rectangle1_2'/>
					<span className='GuestMode'>Guest Mode</span>
					<img className='Subtract_2' src = {ImgAsset.FrontPage_Subtract_2} />
				</div>
			</Link>
		</div>
	)
}