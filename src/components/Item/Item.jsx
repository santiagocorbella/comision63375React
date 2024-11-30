import { Link } from "react-router-dom"

const Item = ({ id, name, category, price, img }) => {
    return (
     <article>
        <h4 style ={{color:'white',fontSize:20}}>CATEGORIA: {category}</h4>
        <h3>{name}</h3>
        <img src={img} style={{width:100}}/>
        <h4>${price}</h4>
        <Link style ={{color:'orange',fontSize:25,textDecoration: 'underline'}} to={`/item/${id}`}>Ver Detalle</Link>
     </article>
    )
 }
  
 export default Item   