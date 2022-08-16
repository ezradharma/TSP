import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
//import FrontPage from '../Components/FrontPage';

//import MainPageNoAccount from '../Components/MainPageNoAccount';
import SearchWalmart from '../Components/SearchWalmart';
import SearchA from '../Components/SearchA';
import SearchAFilterName from '../Components/SearchAFilterName';
import SearchAFilterLowest from '../Components/SearchAFilterLowest';
import SearchAFilterHighest from '../Components/SearchAFilterHighest';
//import Signup from '../Components/Signup';
//import Login from '../Components/Login';
//import MainPageWithAccount from '../Components/MainPageWithAccount';
//import StoreRatePageWithAccount from '../Components/StoreRatePageWithAccount';
//import StoreRateHistoricalPageWithAccount from '../Components/StoreRateHistoricalPageWithAccount';
import WalmartRatesPage from '../Components/WalmartRatesPage';
import GapRatesPage from '../Components/GapRatesPage';
import HomeDepotRatesPage from '../Components/HomeDepotRatesPage';
import KohlsRatesPage from '../Components/KohlsRatesPage';
import HotelsComRatesPage from '../Components/HotelsComRatesPage';
import TargetRatesPage from '../Components/TargetRatesPage';
import CostcoRatesPage from '../Components/CostcoRatesPage';
import AmazonRatesPage from '../Components/AmazonRatesPage';
import MainPageV2 from '../Components/MainPageV2';
import SearchNavPage from '../Components/SearchNavPage';
import AppleRatesPage from '../Components/AppleRatesPage';
import BestBuyRatesPage from '../Components/BestBuyRatesPage';
// import TestRatePage from '../Components/TestRatePage';
// import RatePage from '../Components/RatePage';

const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				{/*<Route exact path="/frontpage"><FrontPage /></Route>
				<Route exact path="/mainpagenoaccount"><MainPageNoAccount /></Route>
				<Route exact path="/signup"><Signup /></Route>
				<Route exact path="/login"><Login /></Route>
				<Route exact path="/storeratehistoricalpagewithaccount"><StoreRateHistoricalPageWithAccount /></Route>
				<Route exact path="/mainpagewithaccount"><MainPageWithAccount /></Route>
				<Route exact path="/storeratepagewithaccount"><StoreRatePageWithAccount /></Route>
				
				*/}
				<Route exact path="/searchwalmart"><SearchWalmart /></Route>
				<Route exact path="/searcha"><SearchA /></Route>
				<Route exact path="/searchafiltername"><SearchAFilterName /></Route>
				<Route exact path="/searchafilterlowest"><SearchAFilterLowest /></Route>
				<Route exact path="/searchafilterhighest"><SearchAFilterHighest /></Route>
				<Route exact path="/searchnavpage"><SearchNavPage/></Route>
				
				
				
				<Route exact path="/walmartratespage"><WalmartRatesPage /></Route>
				<Route exact path="/gapratespage"><GapRatesPage /></Route>
				<Route exact path="/homedepotratespage"><HomeDepotRatesPage /></Route>
				<Route exact path="/kohlsratespage"><KohlsRatesPage /></Route>
				<Route exact path="/hotelscomratespage"><HotelsComRatesPage /></Route>
				<Route exact path="/targetratespage"><TargetRatesPage /></Route>
				<Route exact path="/costcoratespage"><CostcoRatesPage /></Route>
				<Route exact path="/amazonratespage"><AmazonRatesPage /></Route>
				<Route exact path="/appleratespage"><AppleRatesPage /></Route>
				<Route exact path="/bestbuyratespage"><BestBuyRatesPage /></Route>
				 <Route exact path="/mainpagev2"><MainPageV2 /></Route>
				{/* <Route exact path="/testratepage"><TestRatePage /></Route>
				<Route exact path="/ratepage"><RatePage /></Route> */}
			</Switch>
		</Router>
	);
}
export default RouterDOM;