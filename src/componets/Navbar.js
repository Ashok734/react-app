
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <section id="navbar-wraper">
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <h4 className="navbar-brand"><NavLink to="/">LOGO </NavLink></h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {/* <NavLink to="/login">Contact </NavLink>
                             */}
                       

       <li className="nav-item login">
       <NavLink to="/login" className="btn btn-outline-dark">Log in </NavLink>
        </li>           
        <li className="nav-item">
        <NavLink to="/" className="btn btn-dark">Get Started </NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</section>
      
    </>
  );
}

export default Navbar
