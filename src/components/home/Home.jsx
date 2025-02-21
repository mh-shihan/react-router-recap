import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <h1 className="text-5xl mt-10 text-emerald-600 font-bold text-center">
        This Home Page
      </h1> */}
      {<Outlet></Outlet>}
    </div>
  );
};

export default Home;
