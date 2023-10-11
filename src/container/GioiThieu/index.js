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
                VINATECH
                </div>
                <div className="desc">
                    <p>{t('Kính chào Quý khách hàng!')}</p>
                    <p>{t('Công ty VINATECH chúng tôi hoạt động trong lĩnh vực cung cấp các loại bơm van, cyclone và sơn Epoxy và phụ tùng trong các ngành công nghiệp như các nhà máy khai thác khoáng sản, nhà máy dầu khí, hóa chất, các nhà máy xử lý nước thải công nghiệp tổng hợp và nhà máy nhiệt điện, ... Với sứ mệnh đem đến giải pháp và sản phẩm tốt nhất cho khách hàng, chúng tôi mong muốn bằng năng lực của mình tích cực đóng góp cho sự nghiệp phát triển kinh tế của đất nước.')}</p>
                    <p>{t('Với phương châm : “ Uy tín-Chất lượng – Nhiệt tình” chúng tôi luôn cố gắng phấn đấu đem đến những sản phẩm tốt nhất cho khách hàng, phấn đấu vì sự phát triển chung. Trong quá trình hoạt động, CÔNG TY VINATECH đã khẳng định được vị thế, năng lực của mình trong lĩnh vực bơm, van, cyclone có độ ăn mòn và mài mòn cao ngoài ra trong lĩnh vực sơn công ty chúng tôi cung cấp loại sơn Epoxy thương hiệu APT sản xuất tại Thái Lan ứng dụng trong chống thấm, sơn nền, sơn sàn và chống ăn mòn. Các giải pháp kỹ thuật công nghệ của chúng tôi cung cấp đã đem lại hiệu quả cao trong sự phát triển của các nhà máy, xử lý hiệu quả các các vấn đề ăn mòn ở các khu vực hay xảy ra sự cố góp một phần nhỏ ổn định dây chuyền sản xuất và sự phát triển của nhà máy.Với đội ngũ kỹ sư kinh nghiệm cũng như sự trợ giúp của những chuyên gia đầu ngành từ hãng ở linh vực Bơm van, cyclone và sơn Epoxy chúng tôi đóng góp và sự phát triển ngành công nghiệp ở Việt Nam cùng với sự quan tâm giúp đỡ của các cấp, sự tín nhiệm của khách hàng, chúng tôi tin rằng sẽ đóng góp được nhiều hơn nữa công sức của mình và sự nghiệp công nghiệp hóa, hiện đại hóa đất nước. Chúng tôi tự hào đã tạo dựng được uy tín đối với quý khách hàng, các nhà máy, công ty chúng tôi xin cam kết phục vụ tốt nhất và lâu dài cho quý khách hàng với sự đảm bảo, cung cấp hàng hóa nhập khẩu chính hãng, các thiết bị đều có chứng chỉ nguồn gốc xuất xứ (CO) và chứng từ chất lượng (CQ) từ các nước trên thế giới. Các kỹ sư, chuyên gia của chúng tôi thường xuyên có kế hoạch đến tận nhà máy sản xuất để trực tiếp kiểm tra cũng như thu thập thêm thông tin về sản phẩm, từ đó có các báo cáo khuyến nghị với nhà máy sao cho sản phẩm có thể hoạt động tốt nhất. Chính vì thế chúng tôi luôn coi trọng chữ tín với khách hàng cùng các chế độ hậu mãi sau bán hàng.')}</p>
                    <p>{t('Chúng tôi tin rằng, với tất cả nỗ lực của mình chúng tôi sẽ khẳng định được thương hiệu và luôn là người bạn đồng hành với quý khách hàng hiện tại và tương lai.')}</p>
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