interface Props{
    text: string
}

const Button: React.FC<Props> = ({text}) => {
    const isBuy = text === 'Mua ngay'
    return (
        <button className={`button-primary ${isBuy ? 'button-buy' : ''}`}>
            <h5 className="button-text">
                {text}
            </h5>
        </button>
    )
}

export default Button