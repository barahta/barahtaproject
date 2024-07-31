import React, {useState, useEffect, useContext} from 'react';
import {Link,useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import MainHeaderComponent from "../components/header/MainHeader";
import BigSliderComponent from "../components/slider/BigSlider";

function MainPage(){


    return (
        <div className='mainbody'>
            <i className="fa-solid fa-forward"></i>
            <MainHeaderComponent />
            <BigSliderComponent />
        </div>
    )
}
export default observer(MainPage)