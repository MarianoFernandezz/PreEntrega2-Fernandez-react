import React, { useContext, useState } from 'react'
// creamos el contexto 
export const CartContext = React.createContext();
// creamos un hook custom para no tener que importar useContext & CartContext
const useCartContext = () => useContext(CartContext);
// creamos el componente que envuelve los hijos que consuman el context
const CartProvider = ({ children }) => {
    //A continuacion toda la logica que queremos compartir como value : 
    const [cart, setCart] = useState([]);

    const addToCard = (item, newQuantity) => {
        
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({
            ...item, quantity: newQuantity
        });
        setCart(newCart);
    }
    console.log(cart)
    const cleanCart = () => setCart([]);
    const isInCart = (id) => { cart.find(product => product.id === id) ? true : false };
    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));

    }
    return (
        <CartContext.Provider value={{
            cleanCart,
            isInCart,
            removeProduct,
            addToCard,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider