import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-xl flex gap-6 justify-center my-4  ">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-amber-600 underline" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-amber-600 underline" : ""
        }
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-amber-600 underline" : ""
        }
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-amber-600 underline" : ""
        }
        to="/update-form"
      >
        Update Form
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-amber-600 underline" : ""
        }
        to="/signup"
      >
        Sign Up
      </NavLink>
    </div>
  );
};

export default Header;
