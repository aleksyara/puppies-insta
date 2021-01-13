import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


function PostCard({post, user}) { 

  return (
    <Card key={post._id}>
        <Card.Header textAlign='left'>
            <Image
                floated='left'
                size='mini'
                avatar
                src={post.user.photoUrl ? post.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
            />
          <span floated="right">{post.user.username}</span>
          </Card.Header>
     
      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
      <Card.Description>
        {post.caption}
      </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}>
        <Icon name={'heart'} size='large' color='grey'/>
        {post.likes.length} Likes
          
      </Card.Content>
    </Card>
  );
}

export default PostCard;