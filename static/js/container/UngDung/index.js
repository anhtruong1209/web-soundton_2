import React, {useEffect, useState} from 'react';
import {Container} from "./style";
import IMAGE_UNG_DUNG from '../../image/ung_dung.png'
import IMAGE_UNG_DUNG_1 from '../../image/ung_dung_1.png'
import IMAGE_UNG_DUNG_2 from '../../image/ung_dung_2.png'
import IMAGE_UNG_DUNG_3 from '../../image/ung_dung_3.png'
import IMAGE_UNG_DUNG_4 from '../../image/ung_dung_4.png'
import IMAGE_UNG_DUNG_5 from '../../image/ung_dung_5.jpg'
import IMAGE_UNG_DUNG_6 from '../../image/ung_dung_6.jpg'
import {useTranslation} from "react-i18next";


const UngDung = () => {
    const {t} = useTranslation()

    return (
        <Container>
            <div className={"row"}>
                <div className="item_ung_dung">
                    <div className="photo">
                        <img src={IMAGE_UNG_DUNG_1} alt=""/>
                        <div className="bong_tron ben_trai"></div>
                    </div>
                    <div className="text_ung_dung">
                        <h1>{t('text.ung_dung1')}</h1>
                        <h2>{t('text.desc_ung_dung_1')}</h2>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="text_ung_dung">
                        <h1>{t('text.ung_dung2')}</h1>
                        <h2>{t('text.desc_ung_dung_2')}</h2>
                    </div>
                    <div className="photo">
                        <img src={IMAGE_UNG_DUNG_2} alt=""/>
                        <div className="bong_tron ben_phai"></div>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="photo">
                        <img src={IMAGE_UNG_DUNG_3} alt=""/>
                        <div className="bong_tron ben_trai"></div>
                    </div>
                    <div className="text_ung_dung">
                        <h1>{t('text.ung_dung3')}</h1>
                        <h2>{t('text.desc_ung_dung_3')}</h2>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="text_ung_dung">
                        <h1>{t('text.ung_dung4')}</h1>
                        <h2>{t('text.desc_ung_dung_4')}</h2>
                    </div>
                    <div className="photo">
                        <img src={IMAGE_UNG_DUNG_4} alt=""/>
                        <div className="bong_tron ben_phai"></div>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="photo">
                        <img src={IMAGE_UNG_DUNG_5} alt=""/>
                        <div className="bong_tron ben_trai"></div>
                    </div>
                    <div className="text_ung_dung">
                        <h1>{t('text.ung_dung5')}</h1>
                        <h2>{t('text.desc_ung_dung_5')}</h2>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="text_ung_dung">
                        <h1>{t('text.ung_dung6')}</h1>
                        <h2>{t('text.desc_ung_dung_6')}</h2>
                    </div>
                    <div className="photo">
                        <img src={IMAGE_UNG_DUNG_6} alt=""/>
                        <div className="bong_tron ben_phai"></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UngDung;