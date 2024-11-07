import { useState } from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }
      
    const increment = () => {
        if(count < stock ) {
            setCount(prev => prev + 1)
        }
    }
    
    return (
        <article style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount