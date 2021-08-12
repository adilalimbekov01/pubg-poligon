import React from 'react';
import { Box, CssBaseline, Container, Typography, Grid, Card, CardContent } from "@material-ui/core"
import { Pagination } from '@material-ui/lab';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pagin = () => {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
    const loadPosts = async() => {
        const res = await axios.get(`http://localhost:8000/products?_page=${page}`)
        setPosts(res.data)
    }

    useEffect(()=>{
        loadPosts()
    }, [page])

    return (
        <div>
            <Container component={Box} py={3}>
            {/* <CssBaseline />
                {posts.map((post) => (
                    <Grid item sm={3} key={post.id} style={{ "height": 250 }} >
                        <Card>
                            <CardContent>
                                <Typography>
                                    {post.id}, {post.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))} */}
                <Pagination 
                    count={10} 
                    variant="outlined" 
                    color="secondary" 
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center"}}
                    showFirstButton={true}
                    showLastButton={true}
                    onChange={(e, val) => setPage(val)}
                    />
            </Container>
        </div>
    );
}; 

export default Pagin;