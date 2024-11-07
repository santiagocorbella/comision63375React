import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(result => {
            setProduct(result)
        })    

    }, [itemId]) 
    
    return (
        <main style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer