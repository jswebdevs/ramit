import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FixedButtons from "../components/FixedButtons";
import Footer from "../components/Footer";


const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <FixedButtons></FixedButtons>
      <Footer></Footer>
    </div>
  );
};

export default Root;
