import React, {useEffect, useState} from 'react';
import {Container} from "./style";
import {Autocomplete, FormControlLabel} from "@mui/material";
import {MdSearch} from "react-icons/md";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {listProductData , Menu} from '../../data';

const ProductType = () => {
    let location = useLocation();
    const {t} = useTranslation()
    const history = useNavigate();
    const asPath = window.location.pathname;
    const lastIndex = asPath.lastIndexOf('/');
    const id = asPath.substring(lastIndex + 1, asPath.length);

    const [listProduct, setListProduct] = useState([])
    const [listSearch, setListSearch] = useState([])



    const [inputValue, setInputValue] = useState('');

  

    useEffect(() => {
        // axios.get(`https://api.trepax.vn/api/products/categories/${id}`)
        //     .then((res) => {
        //         setListProduct(res.data.data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         setListProduct([])
        //     })

        
        let filterKeyword = '';
    
        switch (id) {
            case 'weir-minerals-horizontal-pump':
                filterKeyword = 'horizontal';
                break;
            case 'weir-minerals-vertical-pump':
                filterKeyword = 'vertical';
                break;
            case 'weir-minerals-slurry-valves':
                filterKeyword = 'valves';
                break;
            case 'weir-minerals-knife-gate-valves':
                filterKeyword = 'knife gate valves';
                break;
            case 'weir-minerals-cavex-cyclone-canisters-and-clusters':
                filterKeyword = 'cavex';
                break;
            case 'weir-minerals-submersible-borehole-pumps':
                filterKeyword = 'sxb';
                break;
            case 'weir-minerals-single-stage-double-suction-split-casing-centrifug':
                filterKeyword = 'hsc';
                break;
            case 'weir-minerals-submersible-sewage-pumps':
                filterKeyword = 'wdroo';
                break;
            case 'hydroo-horizontal-pump':
                filterKeyword = 'nsx';
                break;
            case 'hydroo-vertical-pump':
                filterKeyword = 'vdroo ';
                break;
            case 'hydroo-submersible-borehole-pumps':
                filterKeyword = 'sxb';   
                break;   
                case 'hydroo-single-stage-double-suction-split-casing-centrifugal-pumps':
                    filterKeyword = 'hsc';
                    break;   
                    case 'hydroo-submersible-sewage-pumps':
                        filterKeyword = 'wup';
                        break;       
            default:
                
                break;
        }
    
        if (filterKeyword) {
            const filteredList = listProductData.filter(product =>
                product.name.toLowerCase().includes(filterKeyword)
            );
            setListProduct(filteredList);
        }

      
    }, [id])

    const handleChangeInput = (e, newInputValue) => {
        setInputValue(newInputValue)
        axios.post(`https://api.trepax.vn/api/products/search-results`,
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
        axios.post(`https://api.trepax.vn/api/products/search-results`,
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
                                    {t('Sản phẩm cần tìm không có')}
                                </div>}
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default ProductType;