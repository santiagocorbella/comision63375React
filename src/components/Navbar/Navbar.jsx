import CartWidget from "../CartWidget/CartWidget"
import Title from "../Title/Title"
import { Link } from "react-router-dom"

const Navbar = () => {
      return (
        <header style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
           <CartWidget />
           <Title />
           <nav style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
            <Link style={{ backgroundColor: 'black', color: 'orange', padding: '10px 15px',  borderRadius: '5px',  display: 'inline-block' }}to='/category/edulcorante'>CHUKER</Link>
            <Link style={{ backgroundColor: 'orange', color: 'black', padding: '10px 15px',  borderRadius: '5px',  display: 'inline-block' }}to='/category/sal marina'>SAL MARINA FINA X 0,500 GRS</Link>
            <Link style={{ backgroundColor: 'black', color: 'orange', padding: '10px 15px',  borderRadius: '5px',  display: 'inline-block' }}to='/category/galletitas de arroz'>CRACKINES</Link>
           </nav>
        </header>  
        
    )
}

export default Navbar