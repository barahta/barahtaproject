import React, {useState, useEffect, useContext} from 'react';
import {Link,useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import style from './MainHeader.module.scss'

function MainHeaderComponent(){


    return (
        <div className={style.header}>
            <div className={style.logo}>
                <div className={style.imglogo}>
                </div>
                <div className={style.linelogo}></div>
                <div className={style.txtlogo}>BARAHTA</div>
            </div>
            <div className={style.lk}>tyrty</div>
        </div>
    )
}
export default MainHeaderComponent