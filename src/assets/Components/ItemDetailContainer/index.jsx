import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostItem from "../PostItem";
import database from "../../../../database/firebase-config";
import { getDoc , doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    // referencia al query doc (db , nombre de collecion , [lo que queremos traer])
    const queryDoc = doc(database, "productos", id)
    // funcion para obtener producto por id de la db
    const getProductId = async () => {
        // guardamos en una variable los datos traidos por la referencia
        const productId = await getDoc(queryDoc);
        // seteamos el producto por id y el objecto
        setProduct({ id: productId.id, ...productId.data() })
        ;
    }
    useEffect(() => {
        getProductId()
    

    }, [id]);
    
    return (
        <div>
            <PostItem products={product} />
            {/* <button onClick={(()=> console.log(product)) } > hola</button> */}
        </div>
    )
}

export default ItemDetailContainer