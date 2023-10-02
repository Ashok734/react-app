import { NavLink } from 'react-router-dom';
import pic1 from '../../images/pic1.jpg';
const Residence = () => {
  return (
    <>
    <section id="signup-wrapper">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-8">
            <h3>Select your country of residence</h3>
            <div className="col-auto">
          <label className="">Country</label>
          <select className="form-select" id="autoSizingSelect">
            <option>Select Country</option>
            <option value="1">Nepal</option>
            <option value="2">India</option>
            <option value="3">China</option>
          </select>
            </div>
            <div className="info-cv mt-3">
             <span> <i className="fas fa-info-circle"></i> Reference site about Lorem Ipsum, giving information on its origins,</span>
            </div>
            <NavLink to="/company" type="submit" className="btn btn-dark mt-4 next">NEXT <i className="fas fa-arrow-right"></i> </NavLink>
            </div>
            <div className="col-md-4">
                <img src={pic1} className="img-fluid" alt="img" />
                </div>
          </div>
       
         
        </div>
    </section>
      
    </>
  )
}

export default Residence
