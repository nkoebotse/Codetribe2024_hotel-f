import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { db } from '../../config/firbase'; // Ensure the path is correct
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

import img1 from '../gallery/pexels-pixabay-271618.jpg';
import img2 from '../gallery/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpeg';
import img3 from '../gallery/Modern Hotel Room Interior.jpeg';
import img4 from '../gallery/pexels-fotoaibe-1743231.jpg';
import img5 from '../gallery/pexels-jvdm-1457842.jpg';

const HotelBooking = () => {
  const location = useLocation();
  const { checkInDate, checkOutDate, rooms, persons } = location.state || {}; // Access passed data
  const [confirmation, setConfirmation] = useState('');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const user = { uid: 'dummyUserId' }; // Replace with actual user info as needed

  const bookRoom = async (roomName, price) => {
    if (!user) {
      setConfirmation('User not found. Please log in.');
      return;
    }

    const bookingData = {
      roomName,
      price,
      bookedAt: new Date(),  // Current date when the booking is made
      userId: user.uid,
      persons,
      checkOutDate: checkOutDate ? new Date(checkOutDate) : null,
    };

    try {
      await addDoc(collection(db, 'bookings'), bookingData);
      setCart(prevCart => [...prevCart, bookingData]);
      setConfirmation(`Successfully booked ${roomName} for R${price}!`);
    } catch (error) {
      console.error('Error booking room: ', error);
      setConfirmation('Booking failed, please try again.');
    }
  };

  const goToCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  const roomConfigurations = [
    { name: 'Deluxe Room', capacity: 1, basePrice: 900, image: img1 },
    { name: 'Suite Room', capacity: 2, basePrice: 1000, image: img2 },
    { name: 'Standard Room', capacity: 3, basePrice: 1500, image: img3 },
    { name: 'Family Suite', capacity: 4, basePrice: 1800, image: img4 },
    { name: 'Penthouse Suite', capacity: 5, basePrice: 2500, image: img5 },
  ];

  const availableRooms = roomConfigurations.filter(room => room.capacity >= persons);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-10">Hotel Booking</h1>

        {/* Booking Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Booking Summary</h2>
          <div className="text-lg text-gray-600">
            <p><strong>Check-in:</strong> {checkInDate ? new Date(checkInDate).toLocaleString() : 'Not Selected'}</p>
            <p><strong>Check-out:</strong> {checkOutDate ? new Date(checkOutDate).toLocaleString() : 'Not Selected'}</p>
            <p><strong>Rooms:</strong> {rooms}</p>
            <p><strong>Persons:</strong> {persons}</p>
          </div>
        </div>

        {/* Available Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableRooms.map((room) => {
            const adjustedPrice = room.basePrice * (persons / room.capacity);

            return (
              <div key={room.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                <img src={room.image} alt={room.name} className="mb-6 w-full h-56 object-cover rounded-lg" />
                <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                <p className="text-lg text-gray-600 mt-2">Price: <span className="font-semibold text-blue-600">R{adjustedPrice.toFixed(2)} per night</span></p>
                <button 
                  onClick={() => bookRoom(room.name, adjustedPrice)} 
                  className="mt-4 w-full py-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-200"
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Confirmation Message */}
        {confirmation && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-md">
            {confirmation}
          </div>
        )}

        {/* Cart / Bookings */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Your Bookings</h2>
          <div className="mt-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">No bookings yet.</p>
            ) : (
              <>
                <ul className="list-none space-y-4">
                  {cart.map((booking, index) => (
                    <li key={index} className="flex justify-between items-center bg-white p-6 rounded-xl shadow-md">
                      <div>
                        <div className="font-medium text-lg text-gray-800">{booking.roomName}</div>
                        <div className="text-sm text-gray-500">Booked on: {booking.bookedAt.toLocaleString()}</div>
                      </div>
                      <div className="text-lg font-bold text-gray-900">R{booking.price}</div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 text-center">
                  <button 
                    onClick={goToCheckout} 
                    className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300 text-lg"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
