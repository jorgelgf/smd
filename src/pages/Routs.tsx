import { Route, Routes } from "react-router-dom";
import Home from './Home';
const Routs = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Routs;