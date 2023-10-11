import React, {useEffect, useState} from 'react';
import {Container} from "./style";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import MOCKDATA_1 from '../../image/mockdata_1.png'
import MOCKDATA_2 from '../../image/mockdata_2.png'
import MOCKDATA_3 from '../../image/mockdata_3.png'
import {useTranslation} from "react-i18next";

const ProductMockData = () => {
        const {t} = useTranslation()
        const history = useNavigate();
        let location = useLocation();
        const asPath = window.location.pathname;
        const lastIndex = asPath.lastIndexOf('/');
        const id = asPath.substring(lastIndex + 1, asPath.length);
        const [dataProduct, setDataProduct] = useState(null)

        const MOCK_DATA = [
            {
                id: "flooring-systems-catalogue",
                name: "Flooring systems catalogue",
                img: MOCKDATA_1,
                url: "/1-flooring-systems-catalogue.pdf"
            },
            {
                id: "corrosion-and-wear-protection-catalogue",
                name: "Corrosion and wear protection catalogue",
                img: MOCKDATA_2,
                url: "/2-corrosion-and-wear-protection-catalogue.pdf"
            },
            {
                id: "waterproof-catalogue",
                name: "Waterproof catalogue",
                img: MOCKDATA_3,
                url: "/3-waterproof-catalogue.pdf"
            }
        ]

        useEffect(() => {
            axios.get(`https://api.trepax.vn/api/products/${id}`)
                .then((res) => {
                    if (res.data.data && res.data.data.length > 0) {
                        setDataProduct(res.data.data.pop())
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }, [id])


        const handleClick = (e) => {
            e.preventDefault(); // Chặn sự kiện click
        };

        return (
            <Container>
                <div className={"row"}>
                    {MOCK_DATA.map((item) => {
                        if (item.id === id) {
                            return (
                                <div>
                                    <h1>{item.name}</h1>
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        {/* <div onClick={() => {
                                            window.open(item.url)
                                        }} className={"button"} style={{textAlign: "center", backgroundColor: "#0A69C5"}}>
                                            {t('Chi tiết sản phẩm')}
                                        </div> */}
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </Container>
        );
    }
;

export default ProductMockData;