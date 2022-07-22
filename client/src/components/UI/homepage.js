import Images from "./Images";
import Navbar from "./Navbar";
import LabourProfileImage from "../../assets/labourer1.jpg";
import CustomerImage from "../../assets/customer1.png";
import classes from "./HomePage.module.css";
const HomePage = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <Images></Images>

      <div className={`${classes.main} container`}>
        <div className={`${classes.UserSection} row`}>
          <div
            className={`${classes.LabourSection}  m-3 col card`}
            style={{ width: "18rem" }}
          >
            <div>
              <div className="d-flex m-2 justify-content-center">
                <img
                  src={CustomerImage}
                  className={`${classes.avatar} `}
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Customer</h5>
                <p className="card-text">
                  Looking for Labourer or Engineer fast and no third party, Welcome here
                </p>
                <a href="#" className="btn btn-primary">
                  Login as a Customer
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${classes.CustomerSection} m-3 col card`}
            style={{ width: "18rem" }}
          >
            <div className="m-2 d-flex  justify-content-center">
              <img
                src={LabourProfileImage}
                className={`${classes.avatar}`}
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Labourer</h5>
              <p className="card-text">
                Looking for job and want to show to talent without third party, Welcome here!!
              </p>
              <a href="#" className="btn btn-primary">
                Login as a Labourer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
