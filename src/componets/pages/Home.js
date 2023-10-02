import pic1 from '../../images/pic1.jpg';
import PhoneInput from 'react-phone-number-input';
import { NavLink } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import React, { useState } from "react";
const Home = () => {
    const [value, setValue] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          fname: data.get('fname'),
          lname: data.get('lname'),
          email: data.get('email'),
          phone: data.get('phone'),
        }
        console.log(actualData);
       
    }
    return (
       
      <>
    
     <section id="signup-wrapper">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-8">
                <h2><b>Let’s get started!</b></h2>
                <form className="mt-4" id="login-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col">
                    <label className="form-label">First Name</label>
                        <input name="fname" id="fname" type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                    <label className="form-label">Last Name</label>
                        <input name="lname" id="lname" type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className="col-12">
                    <label className="form-label">Email</label>
                    <input name="email" id="email" type="email" className="form-control" placeholder="example@email.com" />
                      </div>
                      <div className="col-12">
                    <label className="form-label">Phone</label>
                        <PhoneInput className="form-control" name="phone" id="phone"
                        international
                        defaultCountry="RU"
                        value={value}
                        onChange={setValue}/>
                      </div>
                      <div className="col-12">
                      <NavLink to="/residence" type="submit" className="btn btn-dark next">NEXT  <i className="fas fa-arrow-right"></i> </NavLink>
                      <NavLink to="/login"><span className='account'>Already have an account?</span>  </NavLink>
                     
                     
                        </div>

                  
                    </div>
                    
                </form>
                </div>
                <div className="col-md-4">
                <img src={pic1} className="img-fluid" alt="img" />
                </div>
            </div>
           


        </div>
     </section>
        
      </>
    );
  }
  
  export default Home;
  