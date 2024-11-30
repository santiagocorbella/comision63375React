import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null)
const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...data}

                setProduct(productAdapted)
            })
            .catch()

    }, [itemId])

    return (
       <div style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
        <main style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
            <h1 style={{ color: 'white',background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>Detalle de producto</h1>
            <ItemDetail {...product} />
        </main>
       </div>  
    )
}

export default ItemDetailContainer