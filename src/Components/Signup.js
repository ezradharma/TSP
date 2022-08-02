import React from 'react'
import './Signup.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Signup () {
	return (
		<div className='Signup_Signup'>
			<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
			<div className='FieldBar'>
				<div className='Rectangle1'/>
				<img className='Subtract' src = {ImgAsset.Signup_Subtract} />
			</div>
			<div className='FieldBar_1'>
				<div className='Rectangle1_1'/>
				<img className='Subtract_1' src = {ImgAsset.Signup_Subtract_1} />
				<span className='EmailAddress'>Email Address</span>
			</div>
			<div className='FieldBar_2'>
				<div className='Rectangle1_2'/>
				<img className='Subtract_2' src = {ImgAsset.Signup_Subtract_2} />
			</div>
			<span className='Username'>Username</span>
			<div className='FieldBar_3'>
				<div className='Rectangle1_3'/>
				<img className='Subtract_3' src = {ImgAsset.Signup_Subtract_3} />
			</div>
				<span className='Signup_1'>Signup</span>
			<span className='CreateAccounttostartsavingtoday'>Create Account to start saving today! </span>
		</div>
	)
}