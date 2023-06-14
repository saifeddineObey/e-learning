import Breadcrumb from "../breadcrumb";
import CourseListing from "../course-listing";
import Header from "../header";
import Sidebar from "../sidebar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <Breadcrumb />
        <div className="contenent">
          <Sidebar />
          <CourseListing />
        </div>
      </div>
    </div>
  );
};

export default Home;
