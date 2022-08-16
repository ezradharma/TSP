import React, { useEffect, useState } from "react";
import './SearchWalmart.css'
import './style.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

export default function TestPage () {
	const [data, setArr] = useState({
        'percents': 5,
        'stores': ''
    });

	const [spinner, setSpinner] = useState(false);

	console.log('hopium')

	useEffect(() => {
        fetch("/main_data").then(res => res.json())
		.then(data => {
			console.log(data)
			setSpinner(true);
			setArr({
				'percents': data.percents,
				'stores': data.stores
			})
		});
	}, []);

    return (
        <>
		<div className='SearchWalmart_SearchWalmart'>
        	<div className='TopBar'>
				<img className='Rectangle19' src = {ImgAsset.SearchWalmart_Rectangle19} />
				<div className='Group1'>
					<Link to='/SearchNavPage'>
						<div className='SearchBarDesktop'>
							<div className='Rectangle1'/>
							<img className='Vector_1' src = {ImgAsset.SearchWalmart_Vector_1} />
						</div>
					</Link>
					<Link to='/SearchNavPage'>
						<div className='FilterDropdownListDesktop'>
							<img className='Vector_2' src = {ImgAsset.SearchWalmart_Vector_2} />
						</div>
					</Link>
				</div>
				<div className='Group4'>
					<div className='Rectangle21'/>
					<span className='USERNAME'>[USERNAME]</span>
				</div>
				<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
				<Link to='/MainPageV2'>
					<div className='MenuIcon'>
						<img className='Line1' src = {ImgAsset.SearchWalmart_Line1} />
						<img className='Line2' src = {ImgAsset.SearchWalmart_Line2} />
						<img className='Line3' src = {ImgAsset.SearchWalmart_Line3} />
					</div>
				</Link>
			</div>
				{!spinner ? (
				<Spinner animation="border" variant="primary" style={{textAlign: "center", marginRight: "auto", marginLeft: "auto", position: "relative", top: "15vh", left: "50vw"}}/>) : 
				<div id="main_stores" style={{color: "black"}}>
				<Link to="/WalmartRatesPage">
				<div>
					<br/>
					{data.stores[0]}
					<br/>
					Best Rate: {data.percents[0]}
				</div>
				</Link>
				<Link to="/AmazonRatesPage">
				<div>
					<br/>
					{data.stores[1]}
					<br/>
					Best Rate: {data.percents[1]}
				</div>
				</Link>
				<Link to="/GapRatesPage">
				<div>
					<br/>
					{data.stores[2]}
					<br/>
					Best Rate: {data.percents[2]}
				</div>
				</Link>
				<Link to="/HotelsComRatesPage">
				<div>
					<br/>
					{data.stores[3]}
					<br/>
					Best Rate: {data.percents[3]}
				</div>
				</Link>
				{/* <Link to="/CostcoRatesPage">
				<div>
					<br/>
					{data.stores[4]}
					<br/>
					Best Rate: {data.percents[4]}
				</div>
				</Link>
				<Link to="/KohlsRatesPage">
				<div>
					<br/>
					{data.stores[5]}
					<br/>
					Best Rate: {data.percents[5]}
				</div>
				</Link>
				<Link to="/HomeDepotRatesPage">
				<div>
					<br/>
					{data.stores[6]}
					<br/>
					Best Rate: {data.percents[6]}
				</div>
				</Link>
				<Link to="/TargetRatesPage">
				<div>
					<br/>
					{data.stores[7]}
					<br/>
					Best Rate: {data.percents[7]}
				</div>
				</Link> */}
			</div>
				}
		</div>
    </>
	)
}