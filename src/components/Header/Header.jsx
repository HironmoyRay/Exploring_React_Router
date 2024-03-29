import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center bg-violet-500 p-4 text-2xl font-semibold">
      <nav>
        <ul>
          <Link to="/" className="p-4">Home</Link>
          <Link to="/about" className="p-4">About Us</Link>
          <Link to="/users" className="p-4">Users</Link>
          <Link to="/posts" className="p-4">Posts</Link>
          <Link to="/contact" className="p-4">Contact</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
