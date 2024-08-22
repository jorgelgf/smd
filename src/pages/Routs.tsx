import { Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Welcome } from './Welcome';
const Routs = () => {
  return (

    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Routs;