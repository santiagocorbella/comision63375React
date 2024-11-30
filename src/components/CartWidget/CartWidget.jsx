import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link style={{ background: 'white'}} to={'/cart'}>
            <img src={cart} style={{background: 'white', width:70}}/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget