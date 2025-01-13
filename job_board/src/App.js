import Nav from './Components/Navbar/Nav';
import Main from "./Components/Header/Main"
import Category from './Components/CategorySearch/Category';
import PopulerCategory from './Components/PopulerCategory/PopulerCategory';
import JobListing from './Components/JobListing/JobListing';
import FeaturedCandidates from './Components/FeaturedCandidates/FeaturedCandidates';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import BrowsJobs from './Components/BrowsJobs/BrowsJobs';

function App() {
  return (
    <>
    <Main/>
    <Category/>
    <PopulerCategory/>
    <JobListing/>
    <FeaturedCandidates/>
    <Footer/>
    
    </>
  );
}

export default App;
