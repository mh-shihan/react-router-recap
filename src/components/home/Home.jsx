import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const asset = useContext(AuthContext);
  return (
    <div>
      <Header></Header>
      {/* <h1 className="text-5xl mt-10 text-emerald-600 font-bold text-center">
        This Home Page
      </h1> */}
      {<Outlet></Outlet>}
      <h1 className="text-5xl text-red-500 text-center"> {asset} </h1>
    </div>
  );
};

export default Home;
