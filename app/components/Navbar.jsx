import { Link } from "@remix-run/react";

const Navbar = () => {
 return (
  <nav>
   <div className="nav-brand">
    <h1>Todo App</h1>
   </div>
   <div className="nav-content">
    <ul>
     <li><Link to="/category">Category</Link></li>
     <li><Link to="/todo">Todo</Link></li>
    </ul>
   </div>
  </nav>
 )
}

export default Navbar;