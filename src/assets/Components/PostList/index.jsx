import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PostItem from '../PostItem'
import Title from '../Title'

const PostList = ({ products }) => {
    const { name } = useParams();
    console.log(name);
    return (
        <div>
            <Title title={`MOST POPULAR PRODUCTS${name}`} />
            <Container sx={{ mt: 5, mb: 5 }}>
            
            
            <Grid container spacing={2} columns={16}>
                {products.map((products) => (
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