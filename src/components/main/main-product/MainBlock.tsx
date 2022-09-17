import { PRODUCTBLOCK } from "../../../data/data"
import MainBlockProduct from "./MainBlockProduct"

interface Props{
    title: string,
    content: string
}

const MainBlock: React.FC<Props> = ({title, content}) => {
    return (
        <div className="container mt-50">
            <h3>
                {title}
            </h3>
            <h5>
                {content}
            </h5>
            {/* List Product */}
            <div className="list-product">
                {
                    PRODUCTBLOCK.map((product: any) => {
                        return <MainBlockProduct image={product.image} title={product.title} price={product.price}/>
                    })
                }
            </div>
        </div>
    )
}

export default MainBlock