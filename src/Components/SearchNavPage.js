import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import './SearchWalmart.css'
import ImgAsset from '../public'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

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

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    var updatedLnks = [...lnks];
    console.log(updatedList)
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    updatedLnks = updatedList.filter((item) => {
      return item.toLowerCase().includes(item.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    console.log(updatedList)
    for (let i = 0; i < updatedList.length; i++) {
      updatedLnks[i] += 'RatesPage';
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
				<img className='TSP3' src = {ImgAsset.FrontPage_TSP3} />
				<Link to='/MainPageV2'>
					<div className='MenuIcon'>
						<img className='Line1' src = {ImgAsset.SearchWalmart_Line1} />
						<img className='Line2' src = {ImgAsset.SearchWalmart_Line2} />
						<img className='Line3' src = {ImgAsset.SearchWalmart_Line3} />
					</div>
				</Link>
			</div>
      <div className="App" style={{position: "relative", textAlign: "center"}}>
        <div className="search-header">
          <input id="search-box" placeholder="Search.." style={{width: "50%", marginTop: "20px"}} onChange={filterBySearch} />
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
