import { Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Welcome } from './Welcome';
import { Products } from './Products';
import { ButtonWhatsApp, Footer } from '../components';
import { PageNotFound } from './pageNotFound';
const Routs = () => {
  return (

    <Routes>
      <Route path='/' element={<><Welcome /></>} />
      <Route path="/home" element={<><ButtonWhatsApp /><Home /><Footer /></>} />
      <Route path="/produtos" element={<>< ButtonWhatsApp /><Products /></>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Routs;