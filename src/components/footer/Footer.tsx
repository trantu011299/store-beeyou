import { FBFooterIcon, InsFooterIcon, YTFooterIcon } from "../../content/icon"
import { MENUFOOTER } from "../../data/data"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
            <div className="footer-left">
                {
                    MENUFOOTER.map((text: string) => {
                            return (
                                <div className="content" key={text}>
                                    <h5 className="mr-20 ml-20 margin-top-bottom-15 cursor-pointer">
                                        <span className="size-14 ">{text}</span>
                                    </h5>
                                </div>
                            )
                    }) 
                }
                </div>
                <div className="footer-right">
                    <span className="size-12">© 2020 beebag.com.vn</span>
                    <div className="mr-5 ml-5">
                        <FBFooterIcon/>
                    </div>
                    <div className="mr-5">
                        <InsFooterIcon/>
                    </div>
                    <div className="mr-5 ml-5">
                        <YTFooterIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer