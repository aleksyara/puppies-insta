import React, { useState } from 'react';
import PageHeader from '../../components/Header/Header';
import PostFeed from '../../components/PostFeed/PostFeed';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/postService';

export default function Feed(props){  

    const [posts, setPosts] = useState([])

    async function handleAddPost(post){

        const data = await postsAPI.create(post);
        // after this we'll want to update state
        // after we get back our new post
        
    }



    return (
        <>
        <PageHeader />
        <AddPostForm handleAddPost={handleAddPost}/>
        <PostFeed />
        </>
    )
}