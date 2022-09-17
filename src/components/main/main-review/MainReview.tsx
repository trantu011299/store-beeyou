import ImageTakeBag from "../../../assets/images/takebag.png"
import ReviewFB from "../../../assets/images/reviewfb.png"
import Arrow from "../../../assets/images/arrow.png"

const MainReview = () => {
    return (
        <div className="">
            <div className="main-review">
                <img className="image-bag" src={ImageTakeBag} alt="ImageTakeBag"/>
                <div className="main-review-list">
                    <h3 className="ml-15">
                        Đánh giá của các nàng
                    </h3>
                    <h5 className="ml-15">
                        Mấy đánh giá này là lấy từ facebook qua nè, không có tự bịa ra đâu nha. Hông tin lên facebook mà xem.
                    </h5>
                    <div className="main-review-block">
                        <div className="main-review-comment">
                            <div className="image-reviewfb-block">
                                <img className="image-reviewfb image-reviewfb-top" src={ReviewFB} alt="ReviewFB"/>
                                <div className="image-reviewfb-casetop"></div>
                            </div>
                            <img className="image-reviewfb image-reviewfb-mid" src={ReviewFB} alt="ReviewFB"/>
                            <div className="image-reviewfb-block">
                                <img className="image-reviewfb image-reviewfb-bot" src={ReviewFB} alt="ReviewFB"/>
                                <div className="image-reviewfb-casebot"></div>
                            </div>
                        </div>
                        <div className="main-review-paging">
                            <div className="main-review-arrow">
                                <img className="image-arrow image-arrow-top" src={Arrow} alt="Arrow"/>
                            </div>
                            <div className="main-review-arrow">
                                <img className="image-arrow image-arrow-bot" src={Arrow} alt="Arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainReview