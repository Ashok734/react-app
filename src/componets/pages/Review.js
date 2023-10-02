import { NavLink } from 'react-router-dom';
import pic1 from '../../images/pic1.jpg';
const Review = () => {
  return (
    <>
      <section id="signup-wrapper">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-8">
            <h3>Review your order</h3>
             <div className="card mb-3">
                <div className="card-body">
                <table className="table align-middle">
                     <tbody>
                          <tr>
                            <td><b>General Information</b></td>
                            </tr>
                            <tr>
                            <td>Company Name</td>
                            <td>aniool</td>
                            </tr>
                            <tr>
                            <td>Entity</td>
                            <td>LLC</td>
                            </tr>
                            <tr>
                            <td>State</td>
                            <td>ktm</td>
                            </tr>
                           
                        </tbody>
                        </table>
                  </div>
                </div>
                <div className="card">
                <div className="card-body">
                <table className="table align-middle">
                     <tbody>
                          <tr>
                            <td><b>Package Information</b></td>
                            </tr>
                            <tr>
                            <td>Type</td>
                            <td>Stater</td>
                            </tr>
                            <tr>
                            <td>Bilings</td>
                            <td>Annual</td>
                            </tr>
                            <tr>
                             <td>-</td>
                            <td><b>$2030</b></td>
                            </tr>
                           
                        </tbody>
                        </table>
                  </div>
                </div>
                <div className="compare">
                    <NavLink to="/annualtax" type="submit" className="btn btn-secondary mt-4"><i className="fas fa-arrow-left"></i> </NavLink>
                    <NavLink to="/review" type="submit" className="btn btn-dark mt-4 next">NEXT <i className="fas fa-arrow-right"></i> </NavLink>
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

export default Review
