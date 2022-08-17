import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import './SearchWalmart.css'
import ImgAsset from '../public'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

/*
File: SearchNavPage.js
GUI II Project: The Saving Portal
Tim Truong, UMass Lowell Computer Science, tim_truong1@student.uml.edu
Copyright (c) 2022 by Tim Truong, Ezra Dharma, and Wesley Gallo.
All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
Updated on 8/16/22 at 4:50pm.
Instructor: Professor Wenjin Zhou
Brief Overview: A Cashback monitoring system that automatically scans the best cashback rates
and display it to the users in order to help them save money and get some cashback
from each purchase during these times of financial crisis where theres a recession going and that
saving money is critical during these times
*/

export default function App() {
    const [data, setArr] = useState({
        'percents': 5,
        'stores': ''
    });

    console.log('hopium')
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        fetch("/home_data").then(res => res.json())
        .then(data => {
          console.log(data)
          setSpinner(true);
          setArr({
            'percents': data.percents,
            'stores': data.stores
          })
        });
    }, []);

    let lnks = ['WalmartRatesPage', 'AmazonRatesPage', 'GapRatesPage', 'HotelsComRatesPage',
    'CostcoRatesPage', 'KohlsRatesPage', 'HomeDepotRatesPage', 'TargetRatesPage', 'AppleRatesPage',
    'BestBuyRatesPage'];
    let itemList = [];
    let percList = [];
    for (let i = 0; i < data.stores.length; i++) {
        itemList.push(data.stores[i]);
        percList.push(data.percents[i]);
    }

    const [filteredList, setFilteredList] = new useState(itemList);
    const [lnklist, setLnkList] = new useState(lnks);

    // Credit goes to this source in getting started on building a search bar in react
    // Link: https://contactmentor.com/build-reactjs-search-filter/
    // Most of code is from the site with some differences in order to fit in some of the structures
    // and requirements in this project.
    // Essentially if user enters a letter or string that is a substring to a store available in our
    // site, the stores will be filtered down and shows up only stores that have these characters.
    const Search = (event) => {

        const query = event.target.value;

        var updatedList = [...itemList];
        var updatedLnks = [...lnks];
        var updatedRates = [...percList];
        console.log(updatedList)

        updatedList = updatedList.filter((item) => {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // set array to the filtered list
        updatedLnks = updatedList.filter((item) => {
          return item.toLowerCase().includes(item.toLowerCase()) !== -1;
        });

        console.log(updatedList)
        var tmp = [];
        // update the links array and concat it with RatesPage so that
        // when users click on div boxes it will redirect the user to the corresponding page
        for (let i = 0; i < updatedList.length; i++) {
          updatedLnks[i] = updatedLnks[i].split('.').join("");
          tmp[i] = updatedLnks[i];
          updatedLnks[i] += 'RatesPage';
          console.log(updatedLnks[i])
        }

        for (let i = 0; i < percList.length; i++) {
          if (itemList[i].includes(tmp[i])) {
            updatedRates[i] = percList[i];
          }
        }

        if (updatedList.length === 0) {
          updatedList[0] = 'No such store exists, please enter something else';
          updatedLnks[0] = '#';
        }

        console.log(updatedLnks);
        setFilteredList(updatedList);
        setLnkList(updatedLnks);
    };

  return (
    !spinner ? (
      <Spinner animation="border" variant="primary" style={{textAlign: "center", marginRight: "auto", marginLeft: "auto", position: "relative", top: "15vh", left: "50vw"}}/>) : <>
      <div className='SearchWalmart_SearchWalmart'>
			<div className='TopBar'>
				<img className='Rectangle19' src = {ImgAsset.SearchWalmart_Rectangle19} />
        <Link to='/MainPageV2'>
				    <img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
        </Link>
				<Link to='/MainPageV2'>
					<div className='MenuIcon'>
              <img className='HomeIcon' src = {ImgAsset.HomeButton} />
					</div>
				</Link>
			</div>
      <div className="App" style={{position: "relative", textAlign: "center"}}>
        <div className="search-header">
          <input id="search-box" placeholder="Search.." style={{width: "50%", marginTop: "20px"}} onChange={Search} />
        </div>
				<div id="wrap">
					<div class="reward-plats container center">
          {filteredList.map((record, i) => <Link to={lnklist[i]}>
            <div key={i} style={{color: "blue"}}>{record}
            <br/>{percList[i]}
					</div></Link>)}
          </div>
          </div>
        </div>
		</div>
    </>
  )
}