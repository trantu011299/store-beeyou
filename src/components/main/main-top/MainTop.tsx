import ImageMainTop from "../../../assets/images/background-image-main.jpg"
import ImageMainTopMobile from "../../../assets/images/background-image-main-mobile.png"
import ImageMainNewTote from "../../../assets/images/image-maintop.png"
import Tape from "../../../assets/images/Tape.png"
import Button from "../../common/Button"
import { DESCRIPTIONS } from "../../../data/data"

const MainTop = () => {
    return (
        <div className="maintop">
            {/* Div 1 */}
            <img className="maintop-image mobile-screen" src={ImageMainTopMobile} alt="ImageMainTopMobile"/>
            <div className="maintop-inside">
                <img className="maintop-inside-image desktop-screen" src={ImageMainTop} alt="ImageMainTop"/>
                <div className="maintop-inside-detail">
                    <div className="container">
                    <div className="maintop-inside-detail-title">
                        <h3 className="text-title">
                            Tote của BeeYou cam kết mang đến sự hài lòng tối đa cho bạn
                        </h3>
                    </div>
                    <div className="maintop-inside-detail-content">
                        <h5 className="text-content">
                            Với cộng đồng nhà thiết kế, chúng tôi là 
                            ngôi nhà thời trang,nơi chắp cánh cho hàng 
                            vạn mẫu thiết kế của các Designer trên khắp Vietnam.
                        </h5>
                        <h5 className="text-content">
                            Với khách hàng, BeeYou là nơi bạn dễ dàng tìm 
                            thấy những những sản phẩm thời trang thể hiện CHẤT 
                            của riêng mình. Là chính mình cùng BeeYou.
                        </h5>
                        <h5 className="text-content">
                            Với đội ngũ lâu năm kinh nghiệm, có tâm với nghề, 
                            những dòng sản phẩm của BeeYou được tuyển chọn những nguyên vật 
                            liệu cao cấp nhất, gia công tinh xảo, công nghệ tối tân nhất 
                            hiện nay, được kiểm tra chất lượng đầu ra khắt khe.
                        </h5>
                    </div>
                    </div>
                </div>
            </div>
            {/* Div 2 */}
            <div className="container">
                <div className="main-new-tote">
                    <div className="main-new-tote-content">
                        <h3>
                            Siêu phẩm Tote mới ra lò
                        </h3>
                        <h5>
                            Mới "chế" ra cái Tote mới các bác ạ. 
                            Thông tin mô tả sơ bộ các bác đọc ở dưới nhé. em đi đóng hàng giao cho khách phát
                        </h5>
                        <div className="description">
                            <img className="description-tape" src={Tape} alt="Tape"/>
                            <h5 className="description-title">
                                Thông tin mô tả sơ bộ
                            </h5>
                            {
                                DESCRIPTIONS.map((des: any) => {
                                    return (
                                        <div className="flexGroup2">
                                            {des.icon}
                                            <h5>
                                                {des.text}
                                            </h5>
                                        </div>
                                    )
                                })
                            }
                            <Button text = "Tìm hiểu thêm"/>
                        </div>
                    </div>
                    <div className="main-new-tote-image">
                        <img src={ImageMainNewTote} alt="ImageMainNewTote"/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default MainTop