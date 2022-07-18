import Images from "./Images";
import Navbar from "./Navbar";
const HomePage = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <Images></Images>
      <div className="container" > 
        <h1>welcome to the small labour please Login </h1>
      </div>
    </>
  );
};

export default HomePage;
