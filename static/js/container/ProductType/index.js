import React, {useEffect, useState} from 'react';
import {Container} from "./style";
import {Autocomplete, FormControlLabel} from "@mui/material";
import {MdSearch} from "react-icons/md";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";

const ProductType = () => {
    let location = useLocation();
    const {t} = useTranslation()
    const history = useNavigate();
    const asPath = window.location.pathname;
    const lastIndex = asPath.lastIndexOf('/');
    const id = asPath.substring(lastIndex + 1, asPath.length);

    const [listProduct, setListProduct] = useState([])
    const [listSearch, setListSearch] = useState([])

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

    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        axios.get(`${window.SystemConfig.URL}/api/products/categories/${id}`)
            .then((res) => {
                setListProduct(res.data.data)
            })
            .catch((error) => {
                console.log(error)
                setListProduct([])
            })
    }, [id])

    const handleChangeInput = (e, newInputValue) => {
        setInputValue(newInputValue)
        axios.post(`${window.SystemConfig.URL}/api/products/search-results`,
            {
                name: newInputValue,
                path: id
            }
        )
            .then((res) => {
                setListSearch(res.data.data.map((item) => {
                    return {label: item.name, value: item.slug}
                }))
            })
            .catch((error) => {
                setListSearch([])
                console.log(error)
            })
    }

    const onSearch = () => {
        axios.post(`${window.SystemConfig.URL}/api/products/search-results`,
            {
                // types: listType,
                name: inputValue,
                path: id
            }
        )
            .then((res) => {
                setListProduct(res.data.data)
            })
            .catch((error) => {
                setListProduct([])
                console.log(error)
            })
    }

    return (
        <Container>
            <div className={"row"}>
                <div className="search">
                    <div className="title">{Menu.map((item) => {
                        if (item.path === id) {
                            return item.name
                        }
                    })}</div>
                    <Autocomplete
                        freeSolo
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        options={listSearch}
                        inputValue={inputValue}
                        onInputChange={handleChangeInput}
                        onChange={(event, newValue) => {
                            history(`/product-catalogue/${id}/${newValue.value}`)
                        }}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            border: "none",
                            outline: "none"
                        }}
                        renderInput={(params) => <div ref={params.InputProps.ref}>
                            <input onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSearch()
                                    e.stopPropagation();
                                }
                            }} style={{fontSize: "20px", paddingLeft: "10px"}} type="text" {...params.inputProps} />
                        </div>}
                    />
                    <div className="icon_search" style={{cursor: "pointer"}}>
                        <MdSearch onClick={onSearch} size={32} color={"#0A69C5"}/>
                    </div>
                </div>

                <div className="list">
                    <div className="right">
                        <div className="row_right">
                            {listProduct.length > 0 && listProduct.map((item) => {
                                return (
                                    <div className="item_product" onClick={() => {
                                        history(`/product-catalogue/${id}/${item.slug}`)
                                    }}>
                                        <div className="photo_product">
                                            <img src={item.image_url} alt=""/>
                                        </div>
                                        <div className="text_product">
                                            <div className="name_product">{item.name}</div>
                                            <div
                                                className="desc_product">{localStorage.getItem('locales') === "vi" ? item.short_description_vn : item.short_description}</div>
                                            <div className="button_product">
                                                <div>{item.brand}</div>
                                            </div>
                                        </div>
                                    </div>)
                            })}

                            {listProduct.length === 0 &&
                                <div style={{margin: "20px 30px", fontSize: "32px", fontStyle: "italic"}}>
                                    {t('text.no_product')}
                                </div>}
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default ProductType;