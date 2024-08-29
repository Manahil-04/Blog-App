import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postsReducer from '../pages/posts/postsSlice';  
import usersReducer from '../pages/user/usersSlice';    

export const store = configureStore({ 
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
