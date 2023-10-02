import { NavLink } from 'react-router-dom';
import pic1 from '../../images/pic1.jpg';
const Sharecompany = () => {
  return (
    <>
     <section id="signup-wrapper">
        <div className="container">
        <h3>Share your company name</h3>
          <div className="row g-5">
            <div className="col-md-8">
              <form className="row">
                <div className="col-md-8">
                    <label>Company name</label>
                    <input type="text" className="form-control" placeholder="company name" aria-label="company name" />
                </div>
                <div className="col-md-4">
                <label style={{visibility: 'hidden' }}>llc</label>
                <select className="form-select" id="autoSizingSelect">
                    <option>LLC</option>
                    <option value="1">llc-1</option>
                    <option value="2">llc-2</option>
                    <option value="3">llc-3</option>
                </select>
                </div>
                <div className="info-cv mt-3">
             <span> <i className="fas fa-info-circle"></i> Reference site about Lorem Ipsum, giving information on its origins,</span>
            </div>
            <div className="compare">
                    <NavLink to="/choosestate" type="submit" className="btn btn-secondary mt-4"><i className="fas fa-arrow-left"></i> </NavLink>
                    <NavLink to="/package" type="submit" className="btn btn-dark mt-4 next">NEXT <i className="fas fa-arrow-right"></i> </NavLink>
                </div>
                </form>
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

export default Sharecompany
