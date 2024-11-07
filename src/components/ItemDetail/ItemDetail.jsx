import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, category, price, img, description, stock }) => {
    return (
     <article>
        <img src={img} style={{width:100}}/>
        <h3>{name}</h3>
        <h4>CATEGORIA: {category}</h4>
        <h4>${price}</h4>
        <h4 style={{color:'white',textDecoration:'underline'}}>Descripción: {description}</h4>
        <ItemCount stock={stock} />
     </article>
    )
 }
  
 export default ItemDetail   