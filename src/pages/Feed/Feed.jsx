import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import PostFeed from '../../components/PostFeed/PostFeed';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/postService';

export default function Feed({user}){  

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
        <>
        <PageHeader />
        <AddPostForm handleAddPost={handleAddPost}/>
        <PostFeed posts={posts} user={user}/>
        </>
    )
}