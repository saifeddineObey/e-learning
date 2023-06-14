import './breadcrumb.css';

const Breadcrumb = () => {
  return <div className="breadcrumb" data-testId="breadcrumb">
    <div className='pages-section'>
    <p>Home Page <span>{">"}</span> e-larning Cources</p> 
    </div>
    <div className='admin-section'>
      <p>admin</p>
    </div>
    
    </div>;
};

export default Breadcrumb;
