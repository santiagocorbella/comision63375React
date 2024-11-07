import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
     const [products, setProducts] = useState([])
     const [loading, setLoading] = useState(true)

     const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })    
            .finally(() => {
                setLoading(false)
            })    
}, [categoryId]) 

if (loading) {
    return <h1 style={{ color:'white', background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>Cargando Listado De Productos...</h1>
}    

    return (
        <main style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
            <h2  style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>{ greeting}</h2>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer