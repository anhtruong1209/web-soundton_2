import React, {useEffect, useState} from 'react';
import {Container} from "./style";
import axios from "axios";
import {useLocation} from 'react-router-dom';

const ProductDetail = () => {
    let location = useLocation();
    const asPath = window.location.pathname;
    const lastIndex = asPath.lastIndexOf('/');
    const id = asPath.substring(lastIndex + 1, asPath.length);
    const [dataProduct, setDataProduct] = useState(null)

    const Menu = [
        {
            "id": "1",
            "name": "Horizontal pump",
            "path": "weir-minerals-horizontal-pump"
        },
        {
            "id": "2",
            "name": "Vertical Pump",
            "path": "weir-minerals-vertical-pump"
        },
        {
            "id": "3",
            "name": "Slurry Valves",
            "path": "weir-minerals-slurry-valves"
        },
        {
            "id": "4",
            "name": "Knife Gate Valves",
            "path": "weir-minerals-knife-gate-valves"
        },
        {
            "id": "5",
            "name": "Cavex® Cyclone Canisters and Clusters",
            "path": "weir-minerals-cavex-cyclone-canisters-and-clusters"
        },
        {
            "id": "6",
            "name": "Horizontal pump",
            "path": "hydroo-horizontal-pump"
        },
        {
            "id": "7",
            "name": "Vertical Pump",
            "path": "hydroo-vertical-pump"
        },
        {
            "id": "8",
            "name": "Submersible borehole pumps",
            "path": "hydroo-submersible-borehole-pumps"
        },
        {
            "id": "9",
            "name": "Single stage double suction split casing centrifug",
            "path": "hydroo-single-stage-double-suction-split-casing-centrifugal-pumps"
        },
        {
            "id": "10",
            "name": "Submersible sewage pumps",
            "path": "hydroo-submersible-sewage-pumps"
        }
    ]

    useEffect(() => {
        axios.get(`${window.SystemConfig.URL}/api/products/${id}`)
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
                {dataProduct && <div className="product">
                    <div className="header_product">
                        <div className={"image_product"}>
                            <img src={dataProduct?.image_url} alt=""/>
                        </div>
                        <div className="name">
                            <h1>{dataProduct?.name}</h1>
                            <h2>{localStorage.getItem('locales') === "vi" ? dataProduct.short_description_vn : dataProduct.short_description}</h2>
                            <div className="tag">
                                <div>{dataProduct?.brand}</div>
                            </div>
                        </div>
                    </div>

                    <div className="desc">
                        <div className="title_desc">Description</div>
                        <div className="text_desc">
                            <div onClick={handleClick}
                                 dangerouslySetInnerHTML={{__html: localStorage.getItem('locales') === "vi" ? dataProduct.description_vn : dataProduct.description}}>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </Container>
    );
};

export default ProductDetail;