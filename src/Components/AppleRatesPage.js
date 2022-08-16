import React, { useEffect, useState } from "react";
import './SearchWalmart.css'
import './style.css'
import ImgAsset from '../public'
import ReactEcharts from "echarts-for-react"
import { FaGreaterThan } from "react-icons/fa";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

export default function AppleRatePage () {
    const [data, setArr] = useState({
        'top5_percents': '',
		'top5_platforms': '',
        'percents': 5,
        'platforms': 'platform_holder',
		'links': '',
        'imgs': ''
    });

	const [spinner, setSpinner] = useState(false);

	useEffect(() => {
        fetch("/rates/apple").then(res => res.json())
		.then(data => {
			setSpinner(true)
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

    let info = [];
    for (let i = 0; i < data.top5_percents.length; i++) {
        info.push(<a href={data.links[i]}>
            <div>
                <img src={data.imgs[i]} />
                <span>{data.top5_platforms[i]}</span><br />
                <span>Best Rates: {data.top5_percents[i]}%</span>
                    <h2><FaGreaterThan style={{fontSize: '50px', float: 'right', marginTop: '-75px', color: "blue"}}/></h2>
            </div>
            </a>)
    }

    let plat_info = [];
    for (let i = 0; i < data.top5_platforms.length; i++) {
        if (i === data.top5_platforms.length - 1) {
            plat_info.push(<span>{data.platforms[i]}</span>)
        } else {
            plat_info.push(<span>{data.platforms[i]}, </span>);
        }
    }

    let perc_info = [];
    for (let i = 0; i < data.top5_percents.length; i++) {
        if (i === data.top5_percents.length - 1) {
            perc_info.push(<span>{data.top5_percents[i]}%</span>)
        } else {
            perc_info.push(<span>{data.top5_percents[i]}%, </span>);
        }
    }

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
				<Link to='/MainPageV2'>
					<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
				</Link>
				<Link to='/MainPageV2'>
					<div className='MenuIcon'>
						<img className='HomeIcon' src = {ImgAsset.HomeButton} />

					</div>
				</Link>
			</div>
			{!spinner ? (
				<Spinner animation="border" variant="primary" style={{textAlign: "center", marginRight: "auto", marginLeft: "auto", position: "relative", top: "15vh", left: "50vw"}}/>) : <>
				<div style={{marginTop: '100px', color: "white"}}>
					<span>Reward Platforms w/ Highest Cashback Rates: </span>
					{plat_info.map((record, i) => <span key={i}>{plat_info[i]}
					</span>)}
					<br></br>
					<span>Highest Cashback Rates for Apple: </span>
					{perc_info.map((record, i) => <span key={i}>{perc_info[i]}
					</span>)}
				</div>
				<ReactEcharts option={option} />
				<div id="wrap">
					<div class="reward-plats container center">
					{info.map((record, i) => <span key={i}>{info[i]}
					</span>)}
					</div>
				</div>
			</>}
	</div>
    </>
	)
}