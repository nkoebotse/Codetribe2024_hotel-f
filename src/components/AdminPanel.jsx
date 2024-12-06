import  { useState, useEffect } from "react";
import { fetchBookings } from '../components/firebaseService'; // Import the service to fetch bookings
import { deleteDoc, doc } from "firebase/firestore"; // Firebase delete functions
import { db } from "../config/firbase"; // Firebase instance

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const data = await fetchBookings(); // Fetch the booking data
        console.log("Fetched Bookings:", data);  // Debugging line to see the fetched data
        setBookings(data);  // Update the state with fetched bookings
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    getBookings();
  }, []);

  const formatDate = (date) => {
    if (!date) return 'N/A';  // Return 'N/A' if no date is provided
    return new Date(date).toLocaleString();  // Convert the Date object to a readable string
  };

  const deleteBooking = async (id) => {
    try {
      const bookingDocRef = doc(db, 'bookings', id); // Reference to the document in Firestore
      await deleteDoc(bookingDocRef); // Delete the booking from Firestore
      setBookings(bookings.filter((booking) => booking.id !== id)); // Update state to remove the deleted booking
      console.log(`Booking with ID ${id} has been deleted`);
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Hotel Bookings Dashboard</h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-3 text-left text-sm font-medium">Room Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Persons</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Check-in</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Check-out</th>
                <th className="px-6 py-3 text-left text-sm font-medium">User ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-sm text-gray-900">{booking.roomName}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">R{booking.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{booking.persons}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{formatDate(booking.bookedAt)}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{formatDate(booking.checkOutDate)}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{booking.userId}</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 ease-in-out"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
