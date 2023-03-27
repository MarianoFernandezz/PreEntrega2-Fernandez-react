import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostItem from "../PostItem";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const get = async () => {
        const res = await axios(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(res.data);
        console.log(id);
        console.log(product);
        console.log(res.data);
    }
    useEffect(() => {
        get()
    

    }, [id]);
    
    return (
        <div>
            <PostItem products={product} />
            {/* <button onClick={(()=> console.log(product)) } > hola</button> */}
        </div>
    )
}

export default ItemDetailContainer