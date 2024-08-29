import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 
import Home from './pages/home/Home';
import Navbar from './components/navbar/navbar.tsx';
import Post from './pages/posts/Posts.tsx';
import User from './pages/user/User';
import './App.css'
import PostDetail from './pages/posts/PostDetail.tsx';
import UserPosts from './pages/user/UserPosts.tsx';
import NewPost from './pages/newpost/NewPost.tsx';


function App() {
  const router = createBrowserRouter([
    {path: "/",
     element: <> <Navbar /> <Home /> </>,
    },
    {path: "users",
     element: <> <Navbar /> <User /> </>,
    },
    {path: "user/:id",
     element: <> <Navbar /> <UserPosts /> </>,
    },
    {path: "posts",
     element: <Post />
    },
    {path: "post/:postId",
     element: <> <Navbar /> <PostDetail /> </>, 
    },
    {path: "newPost",
      element: <> <Navbar /> <NewPost /> </>, 
    },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
