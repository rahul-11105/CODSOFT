import Nav from './Components/Navbar/Nav';
import Main from "./Components/Header/Main"
import Category from './Components/CategorySearch/Category';
import PopulerCategory from './Components/PopulerCategory/PopulerCategory';
import JobListing from './Components/JobListing/JobListing';
import FeaturedCandidates from './Components/FeaturedCandidates/FeaturedCandidates';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import BrowsJobs from './Components/BrowsJobs/BrowsJobs';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Components/Login&signup/UserLogin";

function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route path="/" element={
          <>
            <Main/>
            <Category/>
            <PopulerCategory/>
            <JobListing/>
            <FeaturedCandidates/>
            <Footer/>
          </>
          } />

          <Route path='/contact' element={<Contact/>}/>
          <Route path='/jobs' element={<BrowsJobs/>}/>
          <Route path='/login' element={<Login/>}/>

      </Routes>
    </Router>

    </>
  );
}

export default App;
