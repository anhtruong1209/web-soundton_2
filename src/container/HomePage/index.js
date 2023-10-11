import React from 'react';
import {Container} from "./styled";
import IMAGE_TRAPAX from '../../image/gioi_thieu_show_anh.jpg'
// import KINH_DOANH_1 from '../../image/kinhdoang1.png'
// import KINH_DOANH_2 from '../../image/kinhdoanh2.png'
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {useTranslation} from "react-i18next";

import SLIDE_1 from '../../image/slider/slide9.png'
import SLIDE_2 from '../../image/slider/slide2.png'
import SLIDE_3 from '../../image/slider/slide3.png'
import SLIDE_4 from '../../image/slider/slide4.png'
import SLIDE_5 from '../../image/slider/slide5.png'
import SLIDE_6 from '../../image/slider/slide6.png'

import PARTNER_HA_TINH from '../../image/partners/fomosahatinh.png'
import PARTNER_NGHI_SON_1 from '../../image/partners/nghison1.png'
import PARTNER_NGHI_SON_2 from '../../image/partners/nghison2.png'
import PARTNER_THAI_BINH from '../../image/partners/thaibinh.png'
import PARTNER_QUANG_NINH from '../../image/partners/quangninh.png'
import PARTNER_UONG_BI from '../../image/partners/uongbi.png'
import {Tooltip} from "@mui/material";


import KINH_DOANH_1_IMAGE1 from '../../image/kinh_doanh_1/KINH_DOANH1.jpg'
import KINH_DOANH_1_IMAGE2 from '../../image/kinh_doanh_1/KINH_DOANH2.jpg'
import KINH_DOANH_2_IMAGE1 from '../../image/kinh_doanh_2/KINH_DOANH1.jpg'
import KINH_DOANH_2_IMAGE2 from '../../image/kinh_doanh_2/KINH_DOANH2.jpg'
import KINH_DOANH_3_IMAGE1 from '../../image/kinh_doanh_3/KINH_DOANH1.jpg'
import KINH_DOANH_3_IMAGE2 from '../../image/kinh_doanh_3/KINH_DOANH2.jpg'
import KINH_DOANH_4_IMAGE1 from '../../image/kinh_doanh_4/KINH_DOANH1.jpg'
import KINH_DOANH_4_IMAGE2 from '../../image/kinh_doanh_4/KINH_DOANH2.jpg'

import KINH_DOANH_5_IMAGE1 from '../../image/kinh_doanh_5/1.jpg'
import KINH_DOANH_5_IMAGE2 from '../../image/kinh_doanh_5/2.jpg'
import KINH_DOANH_5_IMAGE3 from '../../image/kinh_doanh_5/3.jpg'
import KINH_DOANH_5_IMAGE4 from '../../image/kinh_doanh_5/4.jpg'
// import KINH_DOANH_5_IMAGE5 from '../../image/kinh_doanh_5/5.jpg'


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

  .slick-slider {
  }
`

const SliderImage = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${props => props.url});
  width: 100vw;
  height: 85vh;
  background-size: cover;
  @media (max-width: 700px) {
    height: 40vh;
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const HomePage = () => {
    const {t} = useTranslation()

    const history = useNavigate();

    const LIST_KINH_DOANH_1 = [
        {
            id: 1,
            img: KINH_DOANH_1_IMAGE1
        },
        {
            id: 2,
            img: KINH_DOANH_1_IMAGE2
        }
    ]

    const LIST_KINH_DOANH_2 = [
        {
            id: 1,
            img: KINH_DOANH_2_IMAGE1
        },
        {
            id: 2,
            img: KINH_DOANH_2_IMAGE2
        }
    ]

    const LIST_KINH_DOANH_3 = [
        {
            id: 1,
            img: KINH_DOANH_3_IMAGE1
        },
        {
            id: 2,
            img: KINH_DOANH_3_IMAGE2
        }
    ]

    const LIST_KINH_DOANH_4 = [
        {
            id: 1,
            img: KINH_DOANH_4_IMAGE1
        },
        {
            id: 2,
            img: KINH_DOANH_4_IMAGE2
        }
    ]

    const LIST_KINH_DOANH_5 = [
        // {
        //     id: 1,
        //     img: KINH_DOANH_5_IMAGE5
        // },
        {
            id: 2,
            img: KINH_DOANH_5_IMAGE1
        },
        {
            id: 3,
            img: KINH_DOANH_5_IMAGE2
        },
        {
            id: 4,
            img: KINH_DOANH_5_IMAGE3
        },
        {
            id: 5,
            img: KINH_DOANH_5_IMAGE4
        }
    ]

    const LIST_PARTNER = [
        {
            id: "https://www.evngenco1.com.vn",
            title: "Nhiệt điện Nghi sơn 1",
            img: PARTNER_NGHI_SON_1
        },
        {
            id: " https://evngenco2.vn/",
            title: "Nhiệt điện Nghi sơn 2",
            img: PARTNER_NGHI_SON_2
        },
        {
            id: "https://www.fhs.com.vn/home",
            title: "Formosa Hà Tĩnh",
            img: PARTNER_HA_TINH
        },
        {
            id: "https://thaibinhtpc.vn/",
            title: "Nhiệt điện Thái Bình 1",
            img: PARTNER_THAI_BINH
        },
        {
            id: "https://www.nhietdienuongbi.com.vn/",
            title: "Nhiệt điện Uông Bí",
            img: PARTNER_UONG_BI
        },
        {
            id: "http://www.quangninhtpc.com.vn/",
            title: "Nhiệt Điện Quảng Ninh",
            img: PARTNER_QUANG_NINH
        }
    ]

    const LIST_BACKGROUND = [
        {
            id: "1",
            url: SLIDE_1
        },
        {
            id: "2",
            url: SLIDE_2
        },
        {
            id: "3",
            url: SLIDE_3
        },
        {
            id: "4",
            url: SLIDE_4
        },
        {
            id: "5",
            url: SLIDE_5
        },
        {
            id: "6",
            url: SLIDE_6
        }
    ]


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: true,
        speed: 1000,
    };

    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
        speed: 1000,
    };

    const settings3 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: true,
        speed: 1000,
        vertical: true
    };

    return (
        <Container>

            <div style={{overflow: "hidden"}}>
                <SliderCustom {...settings}>
                    {LIST_BACKGROUND.map((item) => {
                        return <SliderImage url={item.url}/>
                    })}
                </SliderCustom>
                {/*<img style={{width: "100%"}} src={BACKGROUND_1} alt=""/>*/}
            </div>

            <div style={{margin: "auto", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="title_content" style={{textAlign: "center", color: "#0A69C5"}}>
                VINATECH
                </div>
                <img src={IMAGE_TRAPAX} style={{width: "100%", marginTop: "32px"}} alt=""/>
                <div style={{
                    marginLeft: "60%",
                    marginTop: "32px",
                    backgroundColor: "#0A69C5",
                    padding: "4px 12px",
                    borderRadius: "8px",
                    color: "white",
                    cursor: "pointer"
                }}>
                    <a style={{color: "white", textDecoration: "unset"}} href="/introduce">{t('VỀ CHÚNG TÔI')}</a>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "32px"}}>
                <div className="title_content" style={{color: "#0A69C5"}}>
                    {t('Lĩnh vực kinh doanh')}
                </div>
                <div className={"kinh_doanh"}>
                    <div className={"kinh_doanh_desc"}>
                        {t('Bơm, van trong xử lý nước thải và công nghiệp tổng hợp')}
                    </div>
                    <div style={{width: "50%"}}>
                        <SliderCustom {...settings3}>
                            {LIST_KINH_DOANH_1.map((item) => {
                                return <img src={item.img} alt=""/>
                            })}
                        </SliderCustom>
                    </div>
                </div>
                <div className={"kinh_doanh"} style={{backgroundColor: "white"}}>
                    <div style={{width: "50%", backgroundColor: "#0A69C5"}}>
                        <SliderCustom {...settings3}>
                            {LIST_KINH_DOANH_2.map((item) => {
                                return <img src={item.img} alt=""/>
                            })}
                        </SliderCustom>
                    </div>
                    <div className={"kinh_doanh_desc"} style={{color: "#0A69C5"}}>
                        {t('Bơm, van trong nhà máy hóa chất dầu khí')}
                    </div>
                </div>
                <div className={"kinh_doanh"}>
                    <div className={"kinh_doanh_desc"}>
                        {t('Bơm, van trong khoáng sản')}
                    </div>
                    <div style={{width: "50%"}}>
                        <SliderCustom {...settings3}>
                            {LIST_KINH_DOANH_3.map((item) => {
                                return <img src={item.img} alt=""/>
                            })}
                        </SliderCustom>
                    </div>
                </div>
                <div className={"kinh_doanh"} style={{backgroundColor: "white"}}>
                    <div style={{width: "50%", backgroundColor: "#0A69C5"}}>
                        <SliderCustom {...settings3}>
                            {LIST_KINH_DOANH_4.map((item) => {
                                return <img src={item.img} alt=""/>
                            })}
                        </SliderCustom>
                    </div>
                    <div className={"kinh_doanh_desc"} style={{color: "#0A69C5"}}>
                        {t('Bơm, van trong nhà máy nhiệt điện')}
                    </div>
                </div>

                <div className={"kinh_doanh"}>
                    <div className={"kinh_doanh_desc"}>
                        {t('Sơn Epoxy - Chống thấm - Chống ăn mòn')}
                    </div>
                    <div className={"row_img"} style={{width: "50%"}}>
                        <SliderCustom {...settings3}>
                            {LIST_KINH_DOANH_5.map((item) => {
                                return <img src={item.img} alt=""/>
                            })}
                        </SliderCustom>
                    </div>
                </div>


            </div>

            <div className={"partner"} style={{marginTop: "52px", marginBottom: "200px"}}>
                <div className="title_content"
                     style={{color: "#0A69C5", margin: "0 100px", textAlign: "center", marginBottom: "80px"}}>
                    {t('Các nhà máy đang sử dụng bơm, van, cyclone của Weir Minerals')}
                </div>
                <SliderCustom {...settings2}>
                    {LIST_PARTNER.map((item) => {
                        return <div style={{display: "flex !important", justifyContent: "center !important"}}>
                            <Tooltip title={item.title}>
                                <div className={"row_image"} onClick={() => {
                                    window.open(item.id)
                                }}>
                                    <img src={item.img} alt=""/>
                                </div>
                            </Tooltip>
                        </div>
                    })}
                </SliderCustom>
                {/*<img style={{width: "100%"}} src={BACKGROUND_1} alt=""/>*/}
            </div>

        </Container>
    );
};

export default HomePage;
