import React from 'react'
import Layout from './componets/pages/Layout';
import Home from './componets/pages/Home';
import Login from './componets/pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Residence from './componets/pages/Residence';
import Company from './componets/pages/Company';
import Choosestate from './componets/pages/Choosestate';
import Sharecompany from './componets/pages/Sharecompany';
import Package from './componets/pages/Package';
import Setup from './componets/pages/Setup';
import Complience from './componets/pages/Complience';
import Annualtax from './componets/pages/Annualtax';
import Review from './componets/pages/Review';

export default function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="login" element={<Login />} />
       <Route path="residence" element={<Residence />} />
       <Route path="company" element={<Company />} />
       <Route path="choosestate" element={<Choosestate />} />
       <Route path="sharecompany" element={<Sharecompany />} />
       <Route path="package" element={<Package />} />
       <Route path="setup" element={<Setup />} />
       <Route path="complience" element={<Complience />} />
       <Route path="annualtax" element={<Annualtax />} />
       <Route path="review" element={<Review />} />
          </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}
