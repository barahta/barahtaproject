import React, {useState, useEffect, useContext} from 'react';
import {Link,useLocation} from "react-router-dom";
import style from './Biglider.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function BigSliderComponent(){

    const slides = [
        {
            img: 'https://xn--80awro.xn--p1ai/images/proadvert_Nike_Air_Force_1_Low_in_street_fashion_diverse_urban_2eac3eba-328d-4539-80b9-d97b1014f992.png',
            title: 'Оглавление 1',
            description: 'Описание слайда 1'
        },
        {
            img: 'https://xn--80awro.xn--p1ai/images/proadvert_Nike_Air_Force_1_Low_in_street_fashion_diverse_urban_3fac8f45-d096-43a0-88f0-4908ad13695a.png',
            title: 'Оглавление 2',
            description: 'Описание слайда 2'
        },
        {
            img: 'https://xn--80awro.xn--p1ai/images/proadvert_Nike_Air_Force_1_Low_in_street_fashion_diverse_urban_22679eae-6569-4f48-99e6-dfaa3dff0340.png',
            title: 'Оглавление 3',
            description: 'Описание слайда 3'
        },
        {
            img: 'https://soberger.ru/wp-content/uploads/2015/08/nike.jpg',
            title: 'Оглавление 4',
            description: 'Описание слайда 4'
        },
        {
            img: 'https://outmaxshop.ru/images/proadvert_Nike_womens_sneaker_for_sport_sport-specific_attire__b368d522-d9d4-466e-8b33-5e4bd345a9df.png',
            title: 'Оглавление 5',
            description: 'Описание слайда 5'
        },
    ]
    const [listslides, setListslides] = useState(slides)
    const [activeslide, setActiveslide] = useState(1)
    const nextSlide = (block) => {
        const winsize = window.innerWidth
        const nextstep = winsize * 0.9
        const maxScrollLeft = block.scrollWidth - block.clientWidth;
        const newScrollLeft = Math.min(maxScrollLeft, block.scrollLeft + nextstep);
        block.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });

        const newlist = [...listslides]
        listslides.map((slide, index)=>{
            if(index === activeslide - 1){
                newlist.push(slide)
            }

        })
        setListslides(newlist)
        let nextactive = activeslide+1
        if(activeslide === 5){
            nextactive = 1
        }
        setActiveslide(nextactive)
    }

    return (
        <div className={style.bigslider}>
            {listslides.map((slide,index)=>{return(
                <div className={style.slide} style={{backgroundImage: `url(${slide.img})`}}></div>
            )})}

            <div className={style.comas}>
                {slides.map((coma, index) => (
                        <div className={style.coma}>
                            <div className={style.comapoint} style={(index+1 !== activeslide)?{display: 'none'}:{}}></div>
                        </div>
                    )
                )}

            </div>
            <div className={style.btnnext} onClick={(e)=>{nextSlide(e.target.parentNode)}}></div>
        </div>
    )
}
export default BigSliderComponent