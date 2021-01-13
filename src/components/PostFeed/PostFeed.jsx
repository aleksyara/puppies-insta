import React from 'react';
import { Grid } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';


export default function PostFeed({posts}){

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
         <Grid.Column style={{ maxWidth: 450 }}>
            <ul>
                {posts.map((post) => {
                return ( 
                        <PostCard post={post} key={post._id} />
                    )
                })}
            </ul>
        </Grid.Column>
       </Grid>
    )
}