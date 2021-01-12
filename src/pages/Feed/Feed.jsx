import React, { useState } from 'react';
import PageHeader from '../../components/Header/Header';
import PostFeed from '../../components/PostFeed/PostFeed';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/postService';

export default function Feed(props){  

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



    return (
        <>
        <PageHeader />
        <AddPostForm handleAddPost={handleAddPost}/>
        <PostFeed />
        </>
    )
}