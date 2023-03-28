import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './assets/Components/ItemDetailContainer';
import PostList from './assets/Components/PostList';
import ResponsiveAppBar from './assets/Components/ResponsiveAppBar'



function App() {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  const urlApi = "https://api.escuelajs.co/api/v1/products?offset=0&limit=35";

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const { data } = axios(urlApi);
  //     if (name) {
  //       setProducts(data.filter((producto) => producto.category.name === name))
  //     } else {
  //       setProducts(data);
  //     }
  //   };  getProducts()

  // }, [name])
  
  
    useEffect(() => {
      const getProducts = async () => {
        const { data } = await axios(urlApi);
        setProducts(data);
        console.log(data);
        console.log("filtrado");
      }
  
      getProducts();
    }, [name]);
    
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


// useEffect(() => {
//   const getProducts = async () => {
//     const { data } = await axios(urlApi);
//     if (name) {
//       setProducts(data.filter(product => product.category.name === name));
//       console.log(data);
//       console.log("filtrado");
//     }}

//   getProducts();
// }, [name]);

// useEffect(() => {
//   const getProducts = async () => {
//     const { data } = await axios(urlApi);
//     if (name) {
//       setProducts(data.filter(product => product.category.name === name));
//       console.log(data);
//       console.log("filtrado");
//     } else {
//       setProducts(data);
//     };
//   }; getProducts();


// }, [name])
