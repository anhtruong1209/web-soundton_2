import React, {useEffect, useState} from 'react';
import {Container} from "./style";
import BG_GIOI_THIEU from '../../image/bg_goi_thieu.png'
import {useTranslation} from "react-i18next";
import {Tooltip} from "@mui/material";
import styled from "styled-components";
import Slider from "react-slick";
import BG_1 from '../../image/about_us/1.jpg'
import BG_2 from '../../image/about_us/2.jpg'
import BG_3 from '../../image/about_us/3.jpg'
import BG_4 from '../../image/about_us/4.jpg'
import BG_5 from '../../image/about_us/5.jpg'
import BG_6 from '../../image/about_us/6.jpg'
import BG_7 from '../../image/about_us/7.jpg'
import BG_8 from '../../image/about_us/8.jpg'
import BG_9 from '../../image/about_us/9.jpg'


const LIST_BG = [
    BG_1, BG_2, BG_3, BG_4, BG_5, BG_6, BG_7, BG_8, BG_9
]

const SliderCustom = styled(Slider)`
  //position: absolute;
  //width: 100vw;
  height: max-content;
  overflow: hidden;

  .slick-dots {
    bottom: 20px;
    color: white;
  }

  .slick-arrow, .slick-prev {
    display: none;
  }

`

const GioiThieu = () => {
    const {t} = useTranslation()

    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
        speed: 1000,
    };

    return (
        <Container>
            <div className="bg_goi_thieu">
                <img src={BG_GIOI_THIEU} alt=""/>
            </div>
            <div className={"row"}>
                <div className="title">
                    Trepax Việt Nam
                </div>
                <div className="desc">
                    <p>{t('text.info1')}</p>
                    <p>{t('text.info2')}</p>
                    <p>{t('text.info3')}</p>
                    <p>{t('text.info4')}</p>
                </div>
            </div>


            <div className={"row"}>
                <div style={{margin: "100px 0"}}>
                    <SliderCustom {...settings2}>
                        {LIST_BG.map((item) => {
                            return <div style={{display: "flex", justifyContent: "center"}}>
                                <img src={item} alt=""/>
                            </div>
                        })}
                    </SliderCustom>
                </div>
            </div>
        </Container>
    );
};

export default GioiThieu;