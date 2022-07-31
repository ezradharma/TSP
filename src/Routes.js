import React from "react";
import Signup from "pages/Signup";
import Login from "pages/Login";
import SplashPage from "pages/SplashPage";
import StoreRateHistoricalPageWithAccount from "pages/StoreRateHistoricalPageWithAccount";
import SearchWalmart from "pages/SearchWalmart";
import StoreRatePageWithAccount from "pages/StoreRatePageWithAccount";
import FrontPage from "pages/FrontPage";
import SearchAFilterHighest from "pages/SearchAFilterHighest";
import SearchAFilterLowest from "pages/SearchAFilterLowest";
import SearchAFilterName from "pages/SearchAFilterName";
import SearchA from "pages/SearchA";
import MainPageNoAccount from "pages/MainPageNoAccount";
import MainPageWithAccount from "pages/MainPageWithAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mainpagewithaccount" element={<MainPageWithAccount />} />
        <Route path="/mainpagenoaccount" element={<MainPageNoAccount />} />
        <Route path="/searcha" element={<SearchA />} />
        <Route path="/searchafiltername" element={<SearchAFilterName />} />
        <Route path="/searchafilterlowest" element={<SearchAFilterLowest />} />
        <Route
          path="/searchafilterhighest"
          element={<SearchAFilterHighest />}
        />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route
          path="/storeratepagewithaccount"
          element={<StoreRatePageWithAccount />}
        />
        <Route path="/searchwalmart" element={<SearchWalmart />} />
        <Route
          path="/storeratehistoricalpagewithaccount"
          element={<StoreRateHistoricalPageWithAccount />}
        />
        <Route path="/splashpage" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
