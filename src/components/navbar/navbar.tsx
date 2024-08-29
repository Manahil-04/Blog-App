import { NavLink } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink className={(e) => {return e.isActive? "red": ""}} to='/'><li>Home</li></NavLink>
            <NavLink className={(e) => {return e.isActive? "red": ""}} to='/users'><li>Users</li></NavLink>
            <NavLink className={(e) => {return e.isActive? "red": ""}} to='/newPost'><li>New Post</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar