import React from 'react';
import LOGO from '../../image/logo_new.png'
import styled from "styled-components";
import {MdPhone, MdEmail, MdLocationOn} from "react-icons/md";
import {useTranslation} from "react-i18next";

const Container = styled.div`
  width: 95%;
  margin: auto;
  border-top: 1px solid #0A69C5;
  margin-top: 82px;
  padding: 40px 0 20px;

  .row {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 1500px) {
      justify-content: space-around;
      width: 90%;
    }

    @media (max-width: 1000px) {
      justify-content: space-around;
      margin-left: 6vw;
      width: 90%;
    }
  }


  .item_footer {
    width: 280px;
    margin: 0 24px;
    @media (max-width: 1500px) {
      width: 200px;
      margin: 0 12px;
    }

    a {
      text-decoration: unset;
    }

    h1 {
      cursor: pointer;
      color: #0A69C5;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 93.75% */
    }

    h2 {
      display: flex;
      align-items: center;
      align-content: center;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
`
const Footer = () => {
    const {t} = useTranslation()

    return (
        <Container>
            <div className="row">
                <div className="item_footer">
                    <img style={{width: "100%", margin: "12px 0"}} src={LOGO} alt=""/>
                </div>
                <div id={"about_us"} className="item_footer">
                    <a><h1>{t('text.A_BOUT_US')}</h1></a>
                    <a href="/introduce"><h2>About TREPAX VietNam</h2></a>
                    <a href={"https://www.global.weir"}><h2>{t('text.nha_cung_cap')}</h2></a>
                </div>
                <div className="item_footer">
                    <a href="/product-catalogue"><h1>{t('text.DICH_VU')}</h1></a>
                    <a href={'/all-products-documents.pdf'}><h2>{t('text.danh_muc_san_pham')}</h2></a>
                </div>
                <div className="item_footer">
                    <h1>{t('text.LIEN_HE')}</h1>
                    <h2><MdPhone size={24} style={{marginRight: "4px"}}/>
                        <div>0988-929-688</div>
                    </h2>
                    <h2><MdEmail size={24} style={{marginRight: "4px"}}/>
                        <div style={{width: "80%"}}>david.thanhnguyen@trepax.vn</div>
                    </h2>
                    <h2><MdLocationOn size={24} style={{marginRight: "4px"}}/>
                        <div style={{width: "80%"}}>Tầng 6 tòa EVD, 431 Tam Trinh - Hoang Mai - Ha Noi</div>
                    </h2>
                </div>
            </div>

        </Container>
    );
};

export default Footer;
