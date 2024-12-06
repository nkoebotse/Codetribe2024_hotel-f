import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FooterSection from './components/FooterSection';
import Login from './components/Login';
import Home from './components/Home'; 
import Rooms from './components/Rooms';
import Offers from './components/Pages/Offers';
import Register from './components/Register';
import AboutUs from './components/Pages/AboutUs';
import Events from './components/Pages/Events';
import Contact from './components/Pages/Contact';
import HotelBooking from './components/Pages/HotelBooking';
import Checkout from './components/Checkout';
import ProfilePage from './components/ProfilePage';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Layout components */}
        <NavBar />
        
        {/* Main content area */}
        <main>
          <Routes>
            {/* Define routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/register" element={<Register />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/hotelbooking" element={<HotelBooking />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<ProfilePage />} />  {/* Profile Page */}
            <Route path="/admin" element={<AdminPanel />} />    {/* Admin Panel */}
          </Routes>
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
