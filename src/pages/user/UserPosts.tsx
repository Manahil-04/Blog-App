import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { selectPosts, fetchPosts } from '../posts/postsSlice'; 


const UserPosts: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch: AppDispatch = useDispatch();
    const posts = useSelector((state: RootState) => selectPosts(state));
    const isLoading = useSelector((state: RootState) => state.posts.isLoading);
    const error = useSelector((state: RootState) => state.posts.error);

    const userId = Number(id);

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts());
        }
    }, [dispatch, posts.length]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const userPosts = posts.filter(post => post.userId === userId);

    if (userPosts.length === 0) {
        return <div>No posts found for user {userId}</div>;
    }

    const handleCardClick = (postId: number) => {
        navigate(`/post/${postId}`);
    };

    return (
        <>
            <h1><strong>User ID:</strong> {id}</h1>
        <div className='all-posts'>
            {userPosts.map(post => (
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
        </>
    );
};

export default UserPosts;
