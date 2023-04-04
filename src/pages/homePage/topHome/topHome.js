import NavBar from '../../../components/navBar/navBar';
import './topHome.css';

const TopHome = () => {
  return (
    <body className="container">
      <NavBar />
      <p className="top-text">Give Hope For People</p>
      <p className="mid-text">
        Helping Each Other <br /> Can Make The World Better
      </p>
      <p className="btm-text">
        We Seek Out World Changers And Difference Makers Around The <br />
        Globe, And Equip Them To Fulfill Their Unique Purpose
      </p>
      <div className="box">
        <div className="donate">Donate Now</div>
        <div className="know">Know About Us</div>
      </div>
    </body>
  );
};

export default TopHome;
