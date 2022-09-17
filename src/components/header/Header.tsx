import { Bag, IconNavMobile, LogoBee } from "../../content/icon"
import { MENU } from "../../data/data"

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <LogoBee/>
                <div className="header-nav ml-40">
                    {
                    MENU.map((text: string) => {
                            return (
                                <div className="content" key={text}>
                                    <h5 className="mr-20 ml-20 margin-top-bottom-15 cursor-pointer">
                                        <span>{text}</span>
                                        <div className="content-block">

                                        </div>
                                    </h5>
                                </div>
                            )
                    }) 
                    }
                </div>
            </div>
            <div className="header-right">
                <div className="cart">
                    <Bag/>
                    <div className="cart-num">
                        <span className="white bold size-12">2</span>
                    </div>
                </div>
                <div className="icon-nav-mobile">
                    <IconNavMobile/>
                </div>
            </div>
        </div>
    )
}

export default Header