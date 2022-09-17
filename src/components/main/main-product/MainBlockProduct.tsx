import ImageProduct from "../../../assets/images/product.png"
import Button from "../../common/Button"

interface Props{
    title: string,
    image: string,
    price: string
}

const MainBlockProduct: React.FC<Props> = ({title, price, image}) => {
    return (
        <div className="mainblock">
            <div className="mainblock-inside">
                <img className="" src={ImageProduct} alt={image}/>
                <h5 className="product-text product-text_title">
                    {title}
                </h5>
                <h5 className="product-text product-text_price">
                    {price}
                </h5>
                <div className="product-color">
                    <div className="colors colors-pink"></div>
                    <div className="colors colors-blue"></div>
                    <div className="colors colors-yellow"></div>
                    <div className="colors colors-white"></div>
                </div>
                <div className="button">
                    <Button text = 'Mua ngay'/>
                </div>
            </div>
        </div>
    )
}

export default MainBlockProduct