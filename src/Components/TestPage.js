import React, { useEffect, useState } from "react";
import './SearchWalmart.css'
import './style.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'

export default function TestPage () {
	// const [myData, setdata] = useState([]);

	// useEffect(() => {
	// 	fetch('/main_data').then(
	// 		response => response.json()
	// 	).then(data => setdata(data.myData))
	// }, []);
	const [data, setArr] = useState({
        'ok': '',
        'msg': '',
        'percents': 5,
        'stores': ''
    });

	useEffect(() => {
        fetch("/main_data").then(res => res.json())
		.then(data => {
			setArr({
				'ok': true,
				'msg': 'Success',
				'percents': data.percents,
				'stores': data.stores
				// data
			})
			console.log(data)
		});
	}, []);

    return (
        <>
		<div className='SearchWalmart_SearchWalmart'>
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
			<div id="main_stores" style={{color: "black"}}>
				<div href="./rates">
					{data.stores[0]}
					<br/>
					Best Rate: {data.percents[0]}
				</div>
				<div href="./rates">
					{data.stores[1]}
					<br/>
					Best Rate: {data.percents[1]}
				</div>
				<div href="./rates">
					{data.stores[2]}
					<br/>
					Best Rate: {data.percents[2]}
				</div>
				<div href="./rates">
					{data.stores[3]}
					<br/>
					Best Rate: {data.percents[3]}
					</div>
				<div href="./rates">
					{data.stores[4]}
					<br/>
					Best Rate: {data.percents[4]}
				</div>
				<div href="./rates">
					{data.stores[5]}
					<br/>
					Best Rate: {data.percents[5]}
				</div>
				<div href="./rates">
					{data.stores[6]}
					<br/>
					Best Rate: {data.percents[6]}
				</div>
				<div href="./rates">
					{data.stores[7]}
					<br/>
					Best Rate: {data.percents[7]}
				</div>
			</div>
		</div>
		{/* <div>
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Stores</th>
					<th>Best Rates</th>
				</tr>
			</thead>
			<tbody>
				{myData.map((item) => (
				<tr>
					{item.map((d) => (
						<td>{d}</td>
					))}
				</tr>
				))}
			</tbody>
    	</table>
		</div> */}
		{/* <div>
		<h1>React and flask</h1>
            
			<p>{data.stores[0]}</p>
			<p>{data.percents[0]}</p>
			<p>{data.stores[1]}</p>
			<p>{data.percents[1]}</p>
			<p>{data.stores[2]}</p>
			<p>{data.percents[2]}</p>
			<p>{data.stores[3]}</p>
			<p>{data.percents[3]}</p>
			<p>{data.stores[4]}</p>
			<p>{data.percents[4]}</p>
		</div> */}
    </>
	)
}