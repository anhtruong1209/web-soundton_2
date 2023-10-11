import React, {useState} from 'react';
import {Container, MenuCon} from "./style";
import LOGO from "../../image/logo_new.png";
import {useTranslation} from "react-i18next";
import {AiOutlineSearch} from "react-icons/ai";
// import IMAGE_VIETNAM from "../../image/vietnam.png";
// import IMAGE_ENGLISH from "../../image/english.png";
import {MdArrowForward, MdMenu} from "react-icons/md";
import {Drawer, Paper} from "@mui/material";

const HeaderFinal = () => {
    const {t, i18n} = useTranslation()

    const MENU1 = [
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
    ]

    const MENU2 = [
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


    const MENU3 = [
        {
            "id": "6",
            name: "Flooring systems catalogue",
            "path": "flooring-systems-catalogue"
        },
        {
            "id": "7",
            name: "Corrosion and wear protection catalogue",
            "path": "corrosion-and-wear-protection-catalogue"
        },
        {
            "id": "8",
            name: "Waterproof catalogue",
            "path": "waterproof-catalogue"
        },
    ]

    const asPath = window.location.pathname;
    const [showInputSearch, setShowInputSearch] = useState(false)
    const [isShowMenuCon, setIsShowMenuCon] = useState(false)
    const [textSearch, setTextSearch] = useState('empty')


    return (
        <Paper sx={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000}} elevation={3}>
            <Container>
                {isShowMenuCon && <Drawer
                    anchor={"right"}
                    open={true}
                    // onClose={toggleDrawer(anchor, false)}
                >
                    <MenuCon
                        style={{
                            width: "100vw",
                            height: "max-content",
                            backgroundColor: "white",
                            position: "relative"
                        }}>
                        <MdArrowForward onClick={() => {
                            setIsShowMenuCon(false)
                        }} size={32} style={{top: "16px", right: "30px", position: "absolute", cursor: "pointer"}}
                                        color={"white"}/>
                        <div style={{
                            marginTop: "50px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center"
                        }}>
                            <ul className="nav"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignItems: "center"
                                }}>
                                <li><a href={"/introduce"}>{t('GIỚI THIỆU')}</a></li>
                                <li>
                                    <a href={"/product-catalogue"}>{t('SẢN PHẨM')}</a>
                                </li>
                                <li><a href={"/application"}>{t('ỨNG DỤNG')}</a></li>
                            </ul>
                            <div className="input_search">
                                <input onChange={(e) => {
                                    if (e.target.value === '' || e.target.value === null) {
                                        setTextSearch('empty')
                                    } else {
                                        setTextSearch(e.target.value)
                                    }
                                }}/>
                                <a href={`/product-catalogue?text=${textSearch}`}
                                   className="icon_search"><AiOutlineSearch
                                    size={30}
                                    color={"white"}/></a>
                            </div>
                            <div className={"menu_san_pham"}>
                                <div style={{textAlign: "center"}}>
                                    <div className="sub-menu">
                                        <p>WEIR MINERALS</p>
                                        {MENU1.map((item) => {
                                            return (<div>
                                                <a href={`/product/categories/${item.path}`}>{item.name}</a>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <div className="sub-menu">
                                        <p>HYDROO WATER PUMPS</p>
                                        {MENU2.map((item) => {
                                            return (<div>
                                                <a href={`/product/categories/${item.path}`}>{item.name}</a>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className={"menu_san_pham"}>

                                <div style={{textAlign: "center"}}>
                                    <div className="sub-menu">
                                        <p>EPOXY PAINT</p>
                                        {MENU3.map((item) => {
                                            return (<div className="menu_item">
                                                <a href={`/product-mock/${item.path}`}>{item.name}</a>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MenuCon>
                </Drawer>}
                <div className="row_header">
                    <a href="/"><img className={"logo"} src={LOGO} alt=""/></a>
                    <div className="row_menu">
                        <div className="menu">
                            <div style={{height: "64px"}}>
                                <div className="menu_item" style={{
                                    backgroundColor: asPath.includes('introduce') ? "#0A69C5" : "none",
                                    color: asPath.includes('introduce') ? "white" : "none"
                                }}>
                                    <a href="/introduce">{t('GIỚI THIỆU')}</a>
                                </div>
                            </div>

                            <div id={"menu_cha"}>
                                <div className="menu_item" style={{
                                    backgroundColor: asPath.includes('product') ? "#0A69C5" : "none",
                                    color: asPath.includes('product') ? "white" : "none"
                                }}>
                                    <a href="/product-catalogue" className="desktop-item">{t('SẢN PHẨM')}</a>
                                </div>

                                <div className="menu_con">
                                    <div className="row_menu_con">
                                        <div className="row_menu_con_item" style={{border: "none"}}>
                                            <h1>EPOXY PAINT</h1>
                                            {MENU3.map((item) => {
                                                return (
                                                    <div className="menu_item">
                                                        <a href={`/product-mock/${item.path}`}>{item.name}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="row_menu_con_item">
                                            <h1>WEIR MINERALS</h1>
                                            {MENU1.map((item) => {
                                                return (
                                                    <div className="menu_item">
                                                        <a href={`/product/categories/${item.path}`}>{item.name}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="row_menu_con_item">
                                            <h1>HYDROO WATER PUMPS</h1>
                                            {MENU2.map((item) => {
                                                return (
                                                    <div className="menu_item">
                                                        <a href={`/product/categories/${item.path}`}>{item.name}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{height: "64px"}}>
                                <div className="menu_item" style={{
                                    backgroundColor: asPath.includes('application') ? "#0A69C5" : "none",
                                    color: asPath.includes('application') ? "white" : "none"
                                }}>
                                    <a href="/application">{t('ỨNG DỤNG')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="action">
                            <AiOutlineSearch color={"#0A69C5"} onClick={() => {
                                setShowInputSearch(true)
                            }} style={{
                                height: "30px",
                                width: "30px",
                                margin: "0 12px",
                                cursor: "pointer",
                                display: showInputSearch ? "none" : "block"
                            }}/>
                            <div className="input_search" style={{display: showInputSearch ? "block" : "none"}}>
                                <input onChange={(e) => {
                                    setTextSearch(e.target.value)
                                }}/>
                                <a href={`/product-catalogue?text=${textSearch}`}
                                   className="icon_search"><AiOutlineSearch
                                    size={30}
                                    color={"white"}/></a>
                            </div>
                            {/* <div style={{display: "flex", alignContent: "center", alignItems: 'center'}}>
                                <div onClick={() => {
                                    i18n.changeLanguage("vi")
                                    localStorage.setItem("locales", "vi")
                                }} style={{
                                    height: "24px",
                                    margin: "0 12px",
                                    width: "36px",
                                    position: "relative",
                                    cursor: "pointer"
                                }}>
                                    <img style={{height: "24px", width: "36px"}} src={IMAGE_VIETNAM} alt=""/>
                                    {i18n.language !== "vi" && <div className="nen_ngon_ngu"></div>}
                                </div>
                                <div onClick={() => {
                                    i18n.changeLanguage("en")
                                    localStorage.setItem("locales", "en")
                                }} style={{
                                    height: "24px",
                                    width: "36px",
                                    position: "relative",
                                    cursor: "pointer"
                                }}>
                                    <img style={{height: "24px", width: "36px"}}
                                         src={IMAGE_ENGLISH} alt=""/>
                                    {i18n.language === "vi" && <div className="nen_ngon_ngu"></div>}
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* <div className={"ngon_ngu"} style={{alignContent: "center", alignItems: 'center'}}>
                        <div onClick={() => {
                            i18n.changeLanguage("vi")
                            localStorage.setItem("locales", "vi")
                        }} style={{
                            height: "24px",
                            margin: "0 12px",
                            width: "36px",
                            position: "relative",
                            cursor: "pointer"
                        }}>
                            <img style={{height: "24px", width: "36px"}} src={IMAGE_VIETNAM} alt=""/>
                            {i18n.language !== "vi" && <div className="nen_ngon_ngu"></div>}
                        </div>
                        <div onClick={() => {
                            i18n.changeLanguage("en")
                            localStorage.setItem("locales", "en")
                        }} style={{
                            height: "24px",
                            width: "36px",
                            position: "relative",
                            cursor: "pointer",
                            marginRight: "16px"
                        }}>
                            <img style={{height: "24px", width: "36px"}}
                                 src={IMAGE_ENGLISH} alt=""/>
                            {i18n.language === "vi" && <div className="nen_ngon_ngu"></div>}
                        </div>
                        {isShowMenuCon ? <MdArrowForward onClick={() => {
                                setIsShowMenuCon(false)
                            }} className={"icon_menu"} size={32} style={{height: "24px", width: "36px"}}
                                                         color={"#0A69C5"}/> :
                            <MdMenu onClick={() => {
                                setIsShowMenuCon(true)
                            }} className={"icon_menu"} size={40} color={"#0A69C5"} cursor={"pointer"}/>
                        }


                    </div> */}


                </div>
            </Container>
        </Paper>

    );
};

export default HeaderFinal;
