import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-xl flex gap-6 justify-center mt-4  ">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;
