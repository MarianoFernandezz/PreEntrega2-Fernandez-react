import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PostItem from '../PostItem'
import Title from '../Title'

const PostList = ({ products }) => {
    const { name } = useParams();
    const filtrado = name? products.filter(product=>product.category.name === name):products
    console.log(name);
    return (
        <div>
            <Title title={`${name? name:"MOST POPULAR PRODUCTS"}`} />
            <Container sx={{ mt: 5, mb: 5 }}>
            
            
            <Grid container spacing={2} columns={16}>
                {filtrado.map((products) => (
                    <Grid key={products.id} item xs={8}>
                            <Link to={`/item/${products.id}`} >
                            <PostItem products={products} />
                    </Link>
                        </Grid>

                ))}
                </Grid>
            </Container></div>
    )
}

export default PostList