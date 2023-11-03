import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return ( 
  <>
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 >
                                {props.name}  
                                <strong className="brand-name"> Avishi Sharma </strong>  
                                
                            </h1>
                            
                            <h2 className="my-4">
                                Full Stack developer
                            </h2>
                            <p>Hello, I'm Avishi Sharma. Welcome to my website, where you can explore a wide range of courses and find the one that suits you best. Whether you're a student looking for the perfect educational path or a professional seeking to enhance your skills, this site will provide you with valuable information to help you make the right choices. Browse through the courses, discover new opportunities, and take the first step towards your educational and career goals.</p>

                            <div className="mt-4"> 
                                <NavLink to={props.visit} className="btn-get-started">
                                    {props.btname}
                                </NavLink>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="homeimage"/> 
                            <img src={props.imgsrc} className="img-fluid animated1" alt="homeimage"/> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
  );
}

export default Common;