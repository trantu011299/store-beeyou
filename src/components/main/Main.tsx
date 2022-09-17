import { CONTENTBLOCK } from "../../data/data"
import MainTop from "./main-top/MainTop"
import MainBlock from "./main-product/MainBlock"
import SlickSlider from "./slider/Slider"
import MainReview from "./main-review/MainReview"
import MainInstagram from "./main-instagram/MainInstagram"

const Main = () => {
    return (
        <div className="main">
            <div className="main-inside">
                {/* home slide */}
                <div className="container">
                    <SlickSlider/>
                </div>
                {/* home content top */}
                <MainTop/>
                {/* home block */}
                {
                    CONTENTBLOCK.map((content: any) => {
                        return <MainBlock title = {content.title} content={content.content}/>
                    })
                }
                {/* home review */}
                <MainReview/>
                {/* home instagram */}
                <MainInstagram/>
            </div>
        </div>
    )
}

export default Main