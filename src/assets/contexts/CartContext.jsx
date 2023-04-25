import React from 'react'
// creamos el contexto 
export const CartContext = React.createContext();
// creamos el componente que envuelve los hijos que consuman el context
const CartProvider = ({ children }) => {
    //A continuacion toda la logica que queremos compartir como value : 
    return (
        <CartContext.Provider value={2}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider