import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState, AppDispatch } from '../../redux/store';

import { fetchPosts, selectPosts, selectIsLoading, selectError } from './postsSlice';
import { useSelector, useDispatch } from 'react-redux';

import './postDetail.css'


const PostDetail: React.FC = () => {
  const { postId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => selectPosts(state));
  const isLoading = useSelector((state: RootState) => selectIsLoading(state));
  const error = useSelector((state: RootState) => selectError(state));

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  const post = posts.find(post => post.id === Number(postId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;
