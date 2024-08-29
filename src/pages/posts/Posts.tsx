import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../../redux/store';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPosts, selectIsLoading, selectError } from './postsSlice';

import './posts.css';


const Post: React.FC = () => {
    const dispatch: AppDispatch = useDispatch(); 
    const posts = useSelector((state: RootState) => selectPosts(state));
    const isLoading = useSelector((state: RootState) => selectIsLoading(state));
    const error = useSelector((state: RootState) => selectError(state));
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleCardClick = (postId: number) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div className='all-posts'>
            {posts.map(post => (
                <div
                    className='post-card'
                    key={post.id}
                    onClick={() => handleCardClick(post.id)}
                >
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Post;
