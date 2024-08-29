import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';

import { createPost, selectPosts } from '../posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

import './newPost.css';


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const NewPost: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const posts = useSelector(selectPosts);

    const [userId, setUserId] = useState<number>(1);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (title.trim() === '' || body.trim() === '') {
            setError('Title and body are required');
            return;
        }

        const lastPostId = posts.length > 0 ? Math.max(...posts.map((post: Post) => post.id)) : 0;
        const newPostId = lastPostId + 1;

        const newPost: Post = {
            userId,
            id: newPostId,
            title,
            body,
        };

        console.log('Dispatching new post:', newPost);

        dispatch(createPost(newPost))
            .unwrap()
            .then(() => {
                navigate('/');
            })
            .catch((err: Error) => {
                setError(err.message || 'Failed to create post');
            });
    };

    return (
        <div className="new-post">
            <h2>Add New Post</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input
                        type="number"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(Number(e.target.value))}
                        placeholder="User ID"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Post title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Post body"
                    />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default NewPost;
