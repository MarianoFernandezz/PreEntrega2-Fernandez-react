import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './assets/Components/ItemDetailContainer';
import PostList from './assets/Components/PostList';
import ResponsiveAppBar from './assets/Components/ResponsiveAppBar';
import database from "../database/firebase-config";
import { getDocs, collection } from "firebase/firestore";



function App() {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  const urlApi = "https://api.escuelajs.co/api/v1/products?offset=0&limit=35";

  // referencia a los productos de nuestra database (firesotre)
  const productsRef = collection(database, "productos");

  // funcion que nos trae la colleccion de firestore
  const getProductsRef = async () => {
    const itemsCollection = await getDocs(productsRef);
    const itemsData = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProducts(itemsData);
  }
  useEffect(() => {
    getProductsRef();
  }, []);

  console.log(products);
  console.log(name);
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<PostList products={products} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:name' element={<PostList products={products} />} />
      </Routes>
      
    </div>
  )
}

export default App

// como usar useEffect con Apis
    // useEffect(() => {
    //   const getProducts = async () => {
    //     const { data } = await axios(urlApi);
    //     setProducts(data);
    //     console.log(data);
    //     console.log("filtrado");
    //   }
  
    //   getProducts();
    // }, [name]);

