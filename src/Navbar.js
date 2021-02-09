import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1> Laloun blog</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create' className='create-link'>
          New Post
        </Link>
      </div>
    </nav>
  );
}
