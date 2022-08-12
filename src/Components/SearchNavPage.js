import React, { useEffect, useState } from "react";
import './SearchWalmart.css'
import './style2.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'

export default function SearchNavPage () {
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  const [btn, setBtns] = useState([]);
  
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  return (
    <>
    <h1>
      {/* <img src="images/TSP.JPG" alt="TSP Icon" /> */}
      <br />
      <br />

      <form className="tspsearch" action="/action_page.php" style={{margin: "auto", maxWidth: "300px"}}>
        <input type="text" placeholder="Search.." name="searchbar" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>

    </h1>
    <form className="tspsearch" action="/action_page.php" style={{margin: "auto", maxWidth: "300px"}}>
      <input type="text" placeholder="Search.." name="searchbar" />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>

    <br />
    <br></br>
    <div id="myBtnContainer">
        <button className="btn active" onclick="filterSelection('all')"> Show all</button>
        <button className="btn" onclick="filterSelection('Big Retail')">Big Retail</button>
        <button className="btn" onclick="filterSelection('Clothing')"> Clothing</button>
        <button className="btn" onclick="filterSelection('Home Repair')"> Home Repair</button>
        <button className="btn" onclick="filterSelection('Travel')"> Travel</button>
    </div>

    <div className="container">
      <div className="filterDiv Big Retail">Amazon</div>
      <div className="filterDiv Big Retail">Costco</div>
      <div className="filterDiv Big Retail">Walmart</div>
      <div className="filterDiv Big Retails">Khols</div>
      <div className="filterDiv Big Retail">Target</div>
      <div className="filterDiv Home Repair">Home Depot</div>
      <div className="filterDiv Travel">Hotels.com</div>
      <div className="filterDiv Clothing">Gap</div>
    </div>
    </>
  )
}