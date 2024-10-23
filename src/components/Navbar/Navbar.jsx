import CartWidget from "../CartWidget/CartWidget"
import Title from "../Title/Title"
const Navbar = () => {
      return (
        <header style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
           <CartWidget />
           <Title />
           <nav style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
            <a href="#"style={{ backgroundColor: 'black', color: 'orange', padding: '10px 15px',  borderRadius: '5px',  display: 'inline-block' }}>EDULCORANTE</a>
            <a href="#"style={{ backgroundColor: 'orange', color: 'black', padding: '10px 15px',  borderRadius: '5px',  display: 'inline-block' }}>SAL MARINA FINA X 0,500 GRS</a>
            <a href="#"style={{ backgroundColor: 'black', color: 'orange', padding: '10px 15px',  borderRadius: '5px',  display: 'inline-block' }}>GALLETA DE ARROZ</a>
           </nav>
        </header>  
        
    )
}

export default Navbar