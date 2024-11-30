import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
const { cart, removeItem } = useContext(CartContext)

  return (
   <div style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
    <h1 style={{color:'white', textDecoration:'underline'}}>Cart</h1>
     <section>
      {
        cart.map(prod => {
          return (
                  <article key={prod.id}>
                    <h2>{prod.name}</h2>
                      <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                  </article>
          )
        })        
      }
     </section>
     <Link style={{color:'white', textDecoration:'underline',fontSize: 30, padding: '1px 3px',background:'purple'}} to='/checkout'>Checkout</Link>    
    </div>
  )
}

export default CartView