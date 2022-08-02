import React from 'react'
import './SplashPage.css'
import ImgAsset from '../public'
import {Redirect} from 'react-router-dom'
export default function SplashPage () {
	return (
		<div className='SplashPage_SplashPage'>
			
			<Redirect to='/mainpagenoaccount'/>
			<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
		</div>
	)
}