import React from 'react'
import { NavLink } from 'react-router-dom';
import pic1 from '../../images/pic1.jpg';
const Choosestate = () => {
  return (
    <>
      <section id="signup-wrapper">
        <div className="container">
        <h3>Choose a state for your LLC</h3>
          <div className="row g-5">
            <div className="col-md-8">
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-1">
                    <div className="slct-radio">
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    </div>
                  </div>
                    <div className="col-md-11">
                    <div className="card-body">
                        <h5 className="card-title">Wowming <span className="badge bg-success">recommended</span></h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to wide additil wide content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card mb-3 other">
             <div className="row g-0">
                <div className="col-md-1">
                    <div className="slct-radio">
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    </div>
                  </div>
                    <div className="col-md-11">
                    <div className="card-body">
                        <h5 className="card-title">Other </h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to wide additil wide content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-auto">
          <label className="">State</label>
          <select className="form-select" id="autoSizingSelect">
            <option>Select State</option>
            <option value="1">Nepal</option>
            <option value="2">India</option>
            <option value="3">China</option>
          </select>
            </div>
            <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">Kathmandu</h5>
                <p className="card-text">one time <span className="price">$20.00</span></p>
            </div>
            </div>
            <div className="compare">
                    <NavLink to="/company" type="submit" className="btn btn-secondary mt-4"><i className="fas fa-arrow-left"></i> </NavLink>
                    <NavLink to="/sharecompany" type="submit" className="btn btn-dark mt-4 next">NEXT <i className="fas fa-arrow-right"></i> </NavLink>
             </div>
             </div>
             <div className="col-md-4">
             <img src={pic1} className="img-fluid" alt="img" />
             <p className="mt-3">LLC compan demo</p>
            </div>
            </div>
          </div>
         </section>
    </>
  )
}

export default Choosestate
