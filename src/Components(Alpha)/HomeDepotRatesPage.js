import React, { useEffect, useState } from "react";
import './SearchWalmart.css'
import './style.css'
import ImgAsset from '../public'
import ReactEcharts from "echarts-for-react"
import { FaGreaterThan } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function HomeDepotRatePage () {

	const [data, setArr] = useState({
        'top5_percents': '',
		'top5_platforms': '',
        'percents': 5,
        'platforms': 'platform_holder',
		'links': '',
        'imgs': ''
    });

	useEffect(() => {
        fetch("/rates/homedepot").then(res => res.json())
		.then(data => {
			setArr({
                'top5_percents': data.top5_percents,
				'top5_platforms': data.top5_platforms,
				'percents': data.percents,
				'platforms': data.platforms,
				'links': data.links,
                'imgs': data.imgs
			})
			console.log(data)
		});
	}, []);

	const option = {
		xAxis: {
			type: 'category',
			data: data.top5_platforms
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
			data: data.top5_percents,
			type: 'bar'
			}
		]
	}; 

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
            <div style={{marginTop: '100px', color: "white"}}>
                <span>Reward Platforms w/ Highest Cashback Rates: </span>
                <span id="plat1">{data.platforms[0]}</span>
                <span>, </span>
                <span id="plat2">{data.platforms[1]}</span>
                <span>, </span>
                <span id="plat3">{data.platforms[2]}</span>
                <span>, </span>
                <span id="plat4">{data.platforms[3]}</span>
                <span>, </span>
                <span id="plat5">{data.platforms[4]}</span>
                <br></br>
                <span>Highest Cashback Rates for Home Depot: </span>
                <span id="num1">{data.top5_percents[0]}</span>
                <span>%, </span>
                <span id="num2">{data.top5_percents[1]}</span>
                <span>%, </span>
                <span id="num3">{data.top5_percents[2]}</span>
                <span>%, </span>
                <span id="num4">{data.top5_percents[3]}</span>
                <span>%, </span>
                <span id="num5">{data.top5_percents[4]}</span><span>%</span>
            </div>
			<ReactEcharts option={option} />
			<div id="wrap">
            <div class="reward-plats container center">
                <div>
                <img src={data.imgs[0]} />
                    <span>{data.top5_platforms[0]}</span><br />
                    <span>Best Rates: {data.top5_percents[0]}%</span>
                    <a href={data.links[0]}>
                        <h1><FaGreaterThan style={{fontSize: '50px', float: 'right', marginTop: '-90px'}}/></h1>
                    </a>
                </div>
                <div>
                <img src={data.imgs[1]} />
                    <span>{data.top5_platforms[1]}</span><br />
                    <span>Best Rates: {data.top5_percents[1]}%</span>
                    <a href={data.links[1]}>
                        <h1><FaGreaterThan style={{fontSize: '50px', float: 'right', marginTop: '-90px'}}/></h1>
                    </a>
                </div>
                <div>
                <img src={data.imgs[2]} />
                    <span>{data.top5_platforms[2]}</span><br />
                    <span>Best Rates: {data.top5_percents[2]}%</span>
                    <a href={data.links[2]}>
                        <h1><FaGreaterThan style={{fontSize: '50px', float: 'right', marginTop: '-90px'}}/></h1>
                    </a>
                </div>
                <div>
                <img src={data.imgs[3]} />
                    <span>{data.top5_platforms[3]}</span><br />
                    <span>Best Rates: {data.top5_percents[3]}%</span>
                    <a href={data.links[3]}>
                        <h1><FaGreaterThan style={{fontSize: '50px', float: 'right', marginTop: '-90px'}}/></h1>
                    </a>
                    </div>
                <div>
                <img src={data.imgs[4]} />
                    <span>{data.top5_platforms[4]}</span><br />
                    <span>Best Rates: {data.top5_percents[4]}%</span>
                    <a href={data.links[4]}>
                        <h1><FaGreaterThan style={{fontSize: '50px', float: 'right', marginTop: '-90px'}}/></h1>
                    </a>
                </div>
                </div>
            </div>
		</div>
    </>
	)
}