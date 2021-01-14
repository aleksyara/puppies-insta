import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import PostFeed from '../../components/PostFeed/PostFeed';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/postService';
import {  Grid } from 'semantic-ui-react'

export default function Feed(){  

    const [posts, setPosts] = useState([])

    async function handleAddPost(post){

        const data = await postsAPI.create(post);

        // to check to make sure this is working
        console.log(data, ' data')
        // after this we'll want to update state
        // after we get back our new post
        // data is the response from our create function in controllers/posts
        // update the state

        setPosts([data.post,  ...posts])
        // to conifrm this check the devtools for your feed component
        
    }

    // Maybe we need to call a funciton that gets all the posts
    async function getPosts(){
    
        try {
          const data = await postsAPI.getAll();
          setPosts([...data.posts])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

      useEffect(() => {
        getPosts()
      }, [])

      



    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddPostForm handleAddPost={handleAddPost}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <PostFeed posts={posts} isProfile={false} numPhotosCol={1}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}