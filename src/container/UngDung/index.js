import React, {useEffect, useState} from 'react';
import {Container} from "./style";
// import IMAGE_UNG_DUNG from '../../image/ung_dung.png'
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
                        <h1>{t('Ứng dụng cho phòng cháy chữa cháy, tòa nhà, thoát nước')}</h1>
                        <h2>{t('Chúng tôi cung cấp các sản phẩm bơm, van có chất lượng, đủ chủng loại để cung cấp, phục vụ cho việc PCCC của các nhà máy, tòa nhà... Bên cạnh đó, còn thúc đẩy quá trình thoát nước đơn giản và hiệu quả hơn. Việc sử dụng sản phẩm của chúng tôi trong vấn đề phòng cháy chữa cháy sẽ giúp các nhà máy, các tòa nhà an tâm khi hoạt động.')}</h2>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="text_ung_dung">
                        <h1>{t('Ứng dụng vận chuyển nước thải công nghiệp')}</h1>
                        <h2>{t('Với kinh nghiệm dày dặn, đội ngũ kĩ sư chuyên nghiệp đến từ công ty VINATECH chúng tôi đã hợp tác và nghiên cứu để đưa ra những dịch vụ chất lượng nhất. Trong đó, công ty chúng tôi chuyên cung cấp dịch vụ, giải pháp quản lý, vận chuyển và xử lý dòng nước thải công nghiệp. Trong lĩnh vực vận chuyển nước thải công nghiệp, chúng tôi có các sản phẩm đặc thù nhằm mục đích phục vụ, đảm bảo đáp ứng được các yêu cầu của khách hàng cũng như đảm bảo được chất lượng và kĩ thuật. Hơn thế nữa, công ty chúng tôi cũng có những chính sách hỗ trợ bảo hành để khách hàng có thể yên tâm sử dụng.')}</h2>
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
                        <h1>{t('Ứng dụng vận chuyển cát, than đá')}</h1>
                        <h2>{t('Nhận thức được việc vận chuyển than đá là quá trình ảnh hưởng đến môi trường và tiêu hao khá nhiều nhân công, công ty VINATECH đã hợp tác cùng các chuyên gia để đưa ra những giải pháp tốt nhất có thể hạn chế việc tiêu tốn nhân công và làm cho quá trình vận chuyển cát, than đá trở lên nhanh chóng, an toàn và thân thiện với môi trường. Để đáp ứng được những nhu cầu đó, chúng tôi sẽ cung cấp những thiết bị chuyên dụng dùng để vận chuyển cát, than đá và các môi chất có độ ăn mòn, mài mòn cao.')}</h2>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="text_ung_dung">
                        <h1>{t('Ứng dụng vận chuyển, xử lý hóa chất')}</h1>
                        <h2>{t('Với đầy đủ các sản phẩm chất lượng và kinh nghiệm của các kĩ sư, Công ty VINATECH chúng tôi cung cấp các dịch vụ có tính ứng dụng cao; chuyên vận chuyển lưu chất có độ ăn mòn, mài mòn cao. Tất cả các sản phẩm của chúng tôi đều được áp dụng các quy chuẩn được quy định về an toàn trong sản xuất, bảo quản, vận chuyển và xử lý các hóa chất nguy hiểm. Đảm bảo hỗ trợ các nhà máy có biện pháp an toàn nhất trong quá trình sản xuất.')}</h2>
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
                        <h1>{t('Ứng dụng trong hệ thống FGD nhà máy nhiệt điện')}</h1>
                        <h2>{t('Hệ thống FGD (Flue Gas Desulfurization) được thiết kế để loại bỏ sulphur oxide trong khói thải (sinh ra từ quá trình đốt trong lò) xuống mức thấp nhất cho phép. Hệ thống này được áp dụng với tiêu chí có thể đáp ứng tất cả những yêu cầu kĩ thuật về khói và nước biển thải ra ngoài môi trường. Công ty chúng tôi cung cấp các thiết bị đảm bảo yêu cầu về kĩ thuật cũng như tính hiệu quả trong hệ thống FGD. Chúng tôi đã hợp tác và áp dụng thành công với rất nhiều nhà máy nhiệt điện lớn tại Việt Nam.')}</h2>
                    </div>
                </div>
                <div className="item_ung_dung">
                    <div className="text_ung_dung">
                        <h1>{t('Ứng dụng trong hệ thống vận chuyển bùn, tro xỉ')}</h1>
                        <h2>{t('Bên cạnh những ứng dụng trên, chúng tôi cũng nghiên cứu đưa ra những giải pháp có thể hạn chế ảnh hưởng tới môi trường trong quá trình vận chuyển tro xỉ từ nhà máy đến bãi xỉ. Qua những thí nghiệm và thực nghiệm thực tiễn, công ty VINATECH đảm bảo sản phẩm mà chúng tôi cung cấp có thể thực hiện được tiêu chí bảo vệ môi trường, rút ngắn quá trình vận chuyển và giúp chất lượng vận chuyển được tối ưu nhất.')}</h2>
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