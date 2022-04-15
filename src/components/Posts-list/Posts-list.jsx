import './Posts-list.css';
import { Card, Timeline } from 'antd';
import api from '../../utils/Api';
import React, { useEffect, useState } from "react";



function PostsList() {


  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    Promise.all([api.getAllProducts(), api.getUserInfo()]).then(
      ([posts, user]) => {
        setPosts(posts.reverse());
        setUser(user);
      }
    );
  }, []);

  const likeFunction = (likes, postId) => {
      const alredyLiked = !!likes.find(id => id === user._id);

      if (!alredyLiked) {
        api.addLike(postId).then(() => 
          api.getAllProducts().then(posts => setPosts(posts.reverse()))
        )

        return;
      }

      api.removeLike(postId).then(() =>
        api.getAllProducts().then(posts => setPosts(posts.reverse()))
      )
  };
  
  const active = (likes) => {
    return !!likes.find(id => id === user._id)? ' _active' : '';
  }

  const deletePost = (postId) => {
    api.deletePost(postId).then(() =>
    api.getAllProducts().then(posts => setPosts(posts.reverse()))
  )
  }
  
  return (
    <div className="Posts-list">
      {
        posts?.length && posts.map(post => {
          return(
           <Card className='post-card' key={post._id} 
           title={<a className='post-card__title' href='/'>{post.title}</a>}>
             <div className='avatar-mail'>
            <img className='post-avatar' src={post.author.avatar}/>
             <p>{post.author.email}</p>
             </div>
            <p>{post.text}</p>

            <div className='tags'>
            <div>Tags:</div>
            
            {
            post.tags.map(tag => {
              return(
                <div key={tag + Math.random()} className='tag'>{tag}</div>)
            })
            }
            </div>
            
            <Timeline>
    <Timeline.Item color="blue">{post.created_at}</Timeline.Item>
    <Timeline.Item color="green">{post.updated_at}</Timeline.Item>
    </Timeline>
            <div className='card-footer'>
            <div className={'likes' + active(post.likes)} onClick={() => likeFunction(post.likes, post._id)}>LIKES: {post.likes.length}</div>
            <svg onClick={() => deletePost(post._id)} className='trash bi bi-trash' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></div>
          </Card>
        )})
      }


   
  
    </div>
  );
}

export default PostsList;
