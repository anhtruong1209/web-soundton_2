import React, {useEffect, useState} from 'react';
import {Container} from "./style";
import {MdSearch} from "react-icons/md";
import Checkbox from '@mui/material/Checkbox';
import {Autocomplete, FormControlLabel, TextField} from "@mui/material";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {listProductData , menuPro} from '../../data';

const Product = () => {
    const {t} = useTranslation()
    const history = useNavigate();
    let location = useLocation();
    const asPath = window.location.search;
    const urlParams = new URLSearchParams(asPath);
    let textSearch = urlParams.get('text')

    const [listProduct, setListProduct] = useState([])
    const [listSearch, setListSearch] = useState([])
    // const [menu, setMenu] = useState([])
    const [listType, setListType] = useState([])
    const [inputValue, setInputValue] = useState(textSearch ? (textSearch !== 'empty' ? textSearch : '') : '');
    const [isSearchFirst, setIsSearchFirst] = useState(false)


   


  

    // useEffect(() => {
    //     axios.get(`https://api.trepax.vn/api/categories/types`)
    //         .then((res) => {
    //             setMenu(res.data.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    useEffect(() => {
       
        if (textSearch) {
           
            setListProduct(listProductData.filter(product =>
                product.name.toLowerCase().includes(textSearch.toLowerCase())
            ))
        } else {
            setListProduct(listProductData)
        }
        setIsSearchFirst(true)
    }, [textSearch])


        useEffect(() => {
            if (isSearchFirst) {
                onSearch()
            }
        }, [listType])

    const handleChangeInput = (e, newInputValue) => {

        setInputValue(newInputValue)
        // axios.post(`https://api.trepax.vn/api/products/search-results`,
        //     {
        //         types: listType,
        //         name: newInputValue,
        //     }
        // )
        //     .then((res) => {
        //         setListSearch(res.data.data.map((item) => {
        //             return {label: item.name, value: item.slug}
        //         }))
        //     })
        //     .catch((error) => {
        //         setListSearch([])
        //         console.log(error)
        //     })


            const listProductFilter = listProductData.filter(product =>
                product.name.toLowerCase().includes(newInputValue.toLowerCase())
            );
        
            setListSearch(listProductFilter)
    }

    // const onSearch = () => {
    //     axios.post(`https://api.trepax.vn/api/products/search-results`,
    //         {
    //             types: listType,
    //             name: inputValue,
    //             // path: "weir-minerals-horizontal-pump"
    //         }
    //     )
    //         .then((res) => {
    //             setListProduct(res.data.data)
    //         })
    //         .catch((error) => {
    //             setListProduct([])
    //             console.log(error)
    //         })
    // }

    const onSearch = () => {
        const listProductFilter = listProductData.filter(product =>
            product.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    
        setListProduct(listProductFilter)
    };
    const onCheck = (value) => {
       
    
        let filterKeyword = '';
    
        switch (value) {
            case 'horizontal-pump':
                filterKeyword = 'horizontal';
                break;
            case 'vertical-pump':
                filterKeyword = 'vertical';
                break;
            case 'slurry-valves':
                filterKeyword = 'valves';
                break;
            case 'knife-gate-valves':
                filterKeyword = 'knife gate valves';
                break;
            case 'cavex-cyclone-canisters-and-clusters':
                filterKeyword = 'cavex';
                break;
            case 'submersible-borehole-pumps':
                filterKeyword = 'sxb';
                break;
            case 'single-stage-double-suction-split-casing-centrifug':
                filterKeyword = 'hsc';
                break;
            case 'submersible-sewage-pumps':
                filterKeyword = 'wdroo';
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
    };


    return (
        <Container>
            <div className={"row"}>
                <div className="search">
                    <div className="title">{t('Sản phẩm của chúng tôi')}</div>
                    <Autocomplete
                        freeSolo
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        disableCloseOnSelect={true}
                        options={listSearch}
                        inputValue={inputValue}
                        onInputChange={handleChangeInput}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, newValue) => {
                            history(`/product-catalogue/product/${newValue.value}`)
                        }}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            border: "none",
                            outline: "none",
                            fontSize: "20px"
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
                    <div className="icon_search">
                        <MdSearch 
                        onClick={onSearch} 
                        size={32} color={"#0A69C5"}/>
                    </div>
                </div>

                <div className="list">
                    <div className="left">
                        <h1>{t('LOẠI')}</h1>
                        <div className="list_check_box">
                            <div className="row_list_check_box">
                                {menuPro.map((item) => {
                                    return (
                                        <FormControlLabel control={<Checkbox onChange={(e) => {
                                            if (e.target.checked) {
                                                onCheck(item.value)
                                                // let array = [...listType]
                                                // array.push(item.value)
                                                // setListType(array)
                                            } else {
                                                const arr = [...listType];
                                                const elementToRemove = item.value;

                                                const filteredArray = arr.filter((item) => item !== elementToRemove);
                                                setListType(filteredArray)
                                            }
                                        }} color="success"/>} label={item.name}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="row_right">
                            {listProduct.length > 0 && listProduct.map((item) => {
                                // console.log(item )
                                return (
                                    <div className="item_product"  key={item.id} onClick={() => {
                                        history(`/product-catalogue/product/${item.slug}`)
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
                                <div style={{
                                    margin: "20px 30px",
                                    fontSize: "32px",
                                    fontStyle: "italic",
                                    textAlign: "center",
                                    width: "100%"
                                }}>
                                    {t('Sản phẩm cần tìm không có')}
                                </div>}
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    );
};

export default Product;
