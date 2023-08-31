import React, { useState, useEffect } from "react";
import menu from './data/menu.json'

import './App.css';

import MenuSection from './Components/MenuSection';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Components/Meal';

function App() {

  const [appetizers, setAppetizers] = useState([]);
  const [entrees,setEntrees] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [selectedAppIdx, setSelectedAppIdx] = useState(false);
  const [selectedEntreeIdx, setSelectedEntreeIdx,] = useState(false);
  const [selectedDessertIdx, setSelectedDessertIdx,] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    let apps = [];
    let ents = [];
    let dess = [];

    // cors policy prevents accessing the data, so using local data

    menu.menu.forEach((item, idx) => {
      if(item.type === 'appetizer'){
        apps.push(item)
      } 
      if(item.type === 'entree'){
        ents.push(item)
      } 
      if(item.type === 'dessert'){
        dess.push(item)
      }      
    })

    setAppetizers(apps)
    setEntrees(ents)
    setDesserts(dess)
    setInfo(menu.restaurant)
  }, [])

  
  const onAppClick = (idx) => {
    if(selectedAppIdx === idx){
      setSelectedAppIdx(false)
    }else{
      setSelectedAppIdx(idx)
    }
  }
  const onEntClick = (idx) => {
    if(selectedEntreeIdx === idx){
      setSelectedEntreeIdx(false)
    }else{
      setSelectedEntreeIdx(idx)
    }
  }
  const onDesClick = (idx) => {
    console.log(idx, "hit des func")
    if(selectedDessertIdx === idx){
      setSelectedDessertIdx(false)
    }else{
      setSelectedDessertIdx(idx)
    }
  }

  const handleShowCart = () => {
    setShowCart(true)
  }
  const handleHideCart = () => {
    setShowCart(false)
  }

  return (
    <div className="App">
      <Header
        logo = {info.logo}
        name = {info.name}
        setShowCart= {handleShowCart}
      />
      <h1 style={{marginTop: '30px'}}>
        IVIM's Build a meal
      </h1>
      <p>Please select up to one item from each section</p>
      {/* appetizers */}
      <MenuSection
        items = {appetizers}
        section = {'Appetizers'}
        onClick = {onAppClick}
        selectedIdx = {selectedAppIdx}
      /> 
      {/* entrees */}
      <MenuSection
        items = {entrees}
        section = {'Entrees'}
        onClick = {onEntClick}
        selectedIdx = {selectedEntreeIdx}
      />
      {/* desserts */}
      <MenuSection
        items = {desserts}
        section = {'Desserts'}
        onClick = {onDesClick}
        selectedIdx = {selectedDessertIdx}
      />
      <Cart
        apps={appetizers}
        ents={entrees}
        dess={desserts}
        selectedAppIdx = {selectedAppIdx}
        selectedEntIdx = {selectedEntreeIdx}
        selectedDesIdx = {selectedDessertIdx}
        showCart = {showCart}
        handleHideCart = {handleHideCart}
      />
      <Footer
        info = {info}
      />
    </div>
  );



}

export default App;
