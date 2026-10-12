import Loader from "react-loader-spinner";
import logo from "../assets/img/Suffix-Logo.png";
const PageLoader = () => {
  return (
    <div className="pageLoading">
      {/* <Loader className='spinner'
        type="Circles"
        color="rgb(0, 150, 255)"
        height={80}
        width={80}
        timeout={4000}
      /> */}
      <div className="d-flex justify-content-center align-items-center spinner">
      <img src={logo} alt="" width={200} />
      </div>
    </div>
  );
};

export default PageLoader;
