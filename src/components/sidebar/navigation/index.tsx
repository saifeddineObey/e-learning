import "./navigation.css";
import { Link } from "react-router-dom";

const fraud_prevention = require("../../../assets/icons/fraud_prevention.png");
const it_security = require("../../../assets/icons/it_security.png");
const data_protection = require("../../../assets/icons/data_protection.png");
const wphg = require("../../../assets/icons/wphg.png");

type NavigationItem = {
  logo: string;
  title: string;
};

const Navigation = () => {
  const navigationMock: NavigationItem[] = [
    {
      logo: fraud_prevention,
      title: "Money Laundering and Fraud Prevention",
    },
    {
      logo: it_security,
      title: "IT Security and Information Security",
    },
    {
      logo: data_protection,
      title: "Data Protection",
    },
    {
      logo: wphg,
      title: "WPHG",
    },
  ];

  return (
    <div className="navigation" data-testid="navigation">
      <div className='title'>
        <h4>Navigation</h4>
      </div>
      {navigationMock.map((item, index) => (
        <Link to={"#"} className="item" key={index} >
          <img src={item.logo} alt="logo" />
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
