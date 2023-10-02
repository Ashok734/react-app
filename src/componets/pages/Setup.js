import { NavLink } from 'react-router-dom';
import pic1 from '../../images/pic1.jpg';
const Setup = () => {
  return (
    <>
      <section id="signup-wrapper">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-8">
            <h3>Time is money. get you bussiness setup completed in half time time</h3>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-1">
                    <div className="slct-radio">
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    </div>
                  </div>
                    <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">Expedited EIN </h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to wide additil wide content. This content is a little bit longer.</p>
                    </div>
                    </div>
                    <div className="col-md-2">
                    <h4 className="pricz2">$300.00</h4>
                    <span className="otime">One time</span>
                    </div>
                </div>
                </div>
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
                        <h5 className="card-title">No Thanks </h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to wide additil wide content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="compare">
                    <NavLink to="/package" type="submit" className="btn btn-secondary mt-4"><i className="fas fa-arrow-left"></i> </NavLink>
                    <NavLink to="/complience" type="submit" className="btn btn-dark mt-4 next">NEXT <i className="fas fa-arrow-right"></i> </NavLink>
             </div>
              </div>
              <div className="col-md-4">
              <img src={pic1} className="img-fluid" alt="img" />
             <p className="mt-3">Why some rejected</p>
             </div>
            </div>
          </div>
         </section>
    </>
  )
}

export default Setup
