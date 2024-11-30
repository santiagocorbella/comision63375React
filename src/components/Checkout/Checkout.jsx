import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [orderTotal, setOrderTotal] = useState(null); 
  const [error, setError] = useState(null);
  const { cart, total, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ 
    name: '', 
    confirmName: '', 
    surname: '', 
    confirmSurname: '', 
    email: '', 
    confirmEmail: '', 
    phone: '', 
    confirmPhone: '' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, confirmName, surname, confirmSurname, email, confirmEmail, phone, confirmPhone } = form;
    if (!name || !confirmName || !surname || !confirmSurname || !email || !confirmEmail || !phone || !confirmPhone) {
      setError ('¡¡¡TODOS LOS CAMPOS SON REQUERIDOS!!!'); 
      return false;
    }
    if (name !== confirmName) {
      setError('¡¡¡EL NOMBRE ES REQUERIDO!!!'); 
      return false;
    }
    if (surname !== confirmSurname) {
      setError('EL APELLIDO ES REQUERIDO'); 
      return false;
    }
    if (email !== confirmEmail) {
      setError('¡¡¡El E-MAIL ES REQUERIDO!!!'); 
      return false;
    }
    if (phone !== confirmPhone) {
      setError('¡¡¡EL NÚMERO DE TELEFONO ES REQUERIDO!!!'); 
      return false;
    }
    return true;
  };

  const createOrder = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const objOrder = {
        buyer: {
          name: form.name,
          surname: form.surname,
          email: form.email,
          phone: form.phone
        },
        items: cart,
        total,
        date: Timestamp.fromDate(new Date())
      };
      console.log('Order Created:', objOrder);

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map(prod => prod.id);

      const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
      const querySnapshot = await getDocs(productsCollection);
      const { docs } = querySnapshot;

      docs.forEach(doc => {
        const data = doc.data();
        const stockDb = data.stock;
        const productAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...data });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderCollection = collection(db, 'orders');
        const { id } = await addDoc(orderCollection, objOrder);

        clearCart();
        setOrderId(id);
        setOrderTotal(total); 
      } else {
        setError('Algunos productos están fuera de stock'); 
      }
    } catch (error) {
      console.error('Error cuando se estuvo generando la orden', error); 
      setError('Ocurrió un error cuando se estuvo generando la orden');  
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422',color:'orange'}}>Su orden está siendo generada...</h1>;
  }

  if (orderId) {
    return (
      <div style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
        <h1 style={{color:'yellow',textDecoration:'underline'}}>El ID de su orden es: {orderId}</h1>
        <h1 style={{color:'white',textDecoration:'underline'}}>Total de la compra: ${orderTotal}</h1> {/* Mostrar el total acá */}
      </div>
    );
  }

  return (
    <div style={{ background: 'linear-gradient(to left,  #0bf51b, #07d672, #06b862, #037633, #024422'}}>
      <h1 style={{color:'violet',textDecoration:'underline',fontSize:45}}>Checkout</h1>
      {error && <p style={{ color: 'blue' }}>{error}</p>}
      <form>
        <label style={{color:'violet',fontSize:20,textDecoration:'underline'}}>
          Nombre:
          <input type="text" name="name" value={form.name} onChange={handleInputChange} />
        </label>
        <br />
        <label style={{color:'violet',fontSize:20}}>
          ¡Confirme Nombre!:
          <input type="text" name="confirmName" value={form.confirmName} onChange={handleInputChange} />
        </label>
        <br />
        <label style={{color:'violet',fontSize:20,textDecoration:'underline'}}>
          Apellido:
          <input type="text" name="surname" value={form.surname} onChange={handleInputChange} />
        </label>
        <br />
        <label style={{color:'violet',fontSize:20}}>
          ¡Confirme Apellido!:
          <input type="text" name="confirmSurname" value={form.confirmSurname} onChange={handleInputChange} />
        </label>
        <br />
        <label style={{color:'violet',fontSize:20,textDecoration:'underline'}}>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleInputChange} />
        </label>
        <br />
        <label style={{color:'violet',fontSize:20}}>
          ¡Confirme Email!:
          <input type="email" name="confirmEmail" value={form.confirmEmail} onChange={handleInputChange} />
        </label>
        <br />
        <label style={{color:'violet',fontSize:20,textDecoration:'underline'}}>
          Telefono:
          <input type="tel" name="phone" value={form.phone} onChange={handleInputChange} />
        </label>
        <br />
        <label style={{color:'violet',fontSize:20}}>
          ¡Confirme Telefono!:
          <input type="tel" name="confirmPhone" value={form.confirmPhone} onChange={handleInputChange} />
        </label>
      </form>
      <button style={{ background:'purple',color:'white',fontSize:23, padding:'10px', textAlign: 'center',textDecoration:'underline',borderRadius:'10px'}} onClick={createOrder}>GENERAR ORDEN</button>
    </div>
  );
};

export default Checkout