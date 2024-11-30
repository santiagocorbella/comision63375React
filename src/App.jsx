import './App.css'
import  Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationsService'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
 return (
     <BrowserRouter>
      <NotificationProvider>
       <CartProvider>
          <div className="d-flex flex-column min-vh-100"> 
           <Navbar />
           <main className="flex-fill"> 
           <Routes>
            <Route path='/' element={<ItemListContainer greeting={'¡Bienvenidos!'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'¡Productos de la categoria!'} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} />
           </Routes>
           </main>
           <Footer /> 
          </div>
        </CartProvider>
       </NotificationProvider>
      </BrowserRouter>
  );
}

export default App  