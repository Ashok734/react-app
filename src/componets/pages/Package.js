import { NavLink } from 'react-router-dom';
import pic1 from '../../images/pic1.jpg';
const Package = () => {
  return (
    <>
     <section id="signup-wrapper">
        <div className="container">
        <h3>The essential package for starting bussiness</h3>
          <div className="row g-5">
            <div className="col-md-8">
            <div className="card other">
            <div className="card-body">
            <i className="fas fa-city"></i>
                <h5 className="card-title">Bussiness starter package</h5>
                <p className="card-text package-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                <li><i className="fas fa-check"></i> Bussiness starter</li>
                <li><i className="fas fa-check"></i> Bussiness starter  package</li>
                <li><i className="fas fa-check"></i> Bussiness starter</li>
                <li><i className="fas fa-check"></i> Bussiness starter  package</li>
             <h4 className="mt-2"><b>$240</b>/yr <span className="check2"><i className="fas fa-check-circle"></i></span></h4>
            </div>
            </div>
            <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">Kathmandu</h5>
                <p className="card-text">one time <span className="price">$20.00</span></p>
            </div>
            </div>
            <div className="info-cv mt-3">
             <span> <i className="fas fa-info-circle"></i> Reference site about Lorem Ipsum, giving information on its origins,</span>
            </div>
            <div className="compare">
                    <NavLink to="/sharecompany" type="submit" className="btn btn-secondary mt-4"><i className="fas fa-arrow-left"></i> </NavLink>
                    <NavLink to="/setup" type="submit" className="btn btn-dark mt-4 next">NEXT <i className="fas fa-arrow-right"></i> </NavLink>
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

export default Package
