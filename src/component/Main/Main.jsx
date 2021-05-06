import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import AboutScreen from '../AboutScreen/AboutScreen'
import BuyNowScreen from '../BuyNowScreen/BuyNowScreen'
import ElectronicScreen from '../ElectronicScreen/ElectronicScreen'
import GrorcyScreen from '../GrocryScreen/GrorcyScreen'
import HomeScreen from '../HomeScreen/HomeScreen'
import Kitchen from '../Kitchen/Kitchen'
import MedicineScreen from '../Medicine/MedicineScreen'
import MenShopScreen from '../MenShopScreen/MenShopScreen'
import MobileScreen from '../MobileScreen/MobileScreen'
import MovieScreen from '../MovieScreen/MovieScreen'
import RestroScreen from '../RestroScreen/RestroScreen'
import SecondScren from '../SecondScreen/SecondScren'
import ShoppingScreen from '../ShoppingScreen/ShoppingScreen'
import SoundScreen from '../SoundScreen/SoundScreen'
import WomenScreen from '../WomenScreen/WomenScreen'

function Main() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/moll-market" component={SecondScren}></Route>
        <Route path="/shoppingscreen" component={ShoppingScreen}></Route>
        <Route path="/restro" component={RestroScreen}></Route>
        <Route path="/movie" component={MovieScreen}></Route>
        <Route path="/about" component={AboutScreen}></Route>
        <Route path="/menshopscreen" component={MenShopScreen}></Route>
        <Route path="/soundscreen" component={SoundScreen}></Route>
        <Route path="/electronicscreen" component={ElectronicScreen}></Route>
        <Route path="/kitchen" component={Kitchen}></Route>
        <Route path="/grorcyscreen" component={GrorcyScreen}></Route>
        <Route path="/mobile" component={MobileScreen}></Route>
        <Route path="/medicine" component={MedicineScreen}></Route>
        <Route path="/womenshop" component={WomenScreen}></Route>
        <Route path="/buynow" component={BuyNowScreen}></Route>
        </BrowserRouter>
    )
}

export default Main
