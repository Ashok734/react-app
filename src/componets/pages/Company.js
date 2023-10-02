import React from 'react'
import { NavLink } from 'react-router-dom';
const Company = () => {
  return (
    <>
      <section id="signup-wrapper">
        <div className="container">
        <h3>Select your company formation entity</h3>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
            <div className="card">
                    <div className="card-body">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                        <h5 className="card-title">LLC</h5>
                        <p className="card-text">Some quick example text to build on the card title and make.</p>
                    </div>
                    </div>
              </div>
              <div className="col-md-4">
            <div className="card">
                    <div className="card-body">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                        <h5 className="card-title">PLC</h5>
                        <p className="card-text">Some quick example text to build on the card title and make.</p>
                    </div>
                    </div>
              </div>
              <div className="col-md-4">
            <div className="card">
                    <div className="card-body">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                        <h5 className="card-title">BBC</h5>
                        <p className="card-text">Some quick example text to build on the card title and make.</p>
                    </div>
                    </div>
              </div>
             </div>
             <div className="compare mt-4">
                <div className="row">
                    <div className="col-md-6">
                    <p>Compare Entites <i className="far fa-plus-square"></i></p>
                    <NavLink to="/residence" type="submit" className="btn btn-secondary mt-4"><i className="fas fa-arrow-left"></i> </NavLink>
                    <NavLink to="/choosestate" type="submit" className="btn btn-dark mt-4 next">NEXT <i className="fas fa-arrow-right"></i> </NavLink>
                    </div>
                    <div className="col-md-6 help">
                    <p>Need Help? <i className="far fa-plus-square"></i> <button type="button" className="btn btn-secondary">Take our quiz</button></p>
                    </div>
                </div>
               
             </div>
            </div>
            </section>
    </>
  )
}

export default Company
