import React from 'react';
import { Grid } from 'semantic-ui-react'
import Post from '../PostCard/PostCard';


export default function PostFeed(props){

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
         <Grid.Column style={{ maxWidth: 450 }}>
            <ul>
                {props.posts.map((post) => {
                return ( 
                        <Post post={post} key={post._id} />
                    )
                })}
            </ul>
        </Grid.Column>
       </Grid>
    )
}