import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { API } from '../../../service/api';

import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]); // Changed the name of the setter function
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category: category || '' });
            if (response.isSuccess) {
                setPosts(response.data); // Updated the setter function here
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
                        No data is available for the selected category
                    </Box>
            }
        </>
    )
}

export default Posts;
