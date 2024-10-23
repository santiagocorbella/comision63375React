import cart from '../../assets/logo.png'

const CartWidget = () => {
    return (
        <button>
            <img src={cart} style={{width:50}}/>
            0
        </button>
    )
}

export default CartWidget