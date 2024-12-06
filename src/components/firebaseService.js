// src/components/firebaseService.js

import { db } from '../config/firbase'; // Adjust to correct path
import { collection, getDocs, Timestamp } from 'firebase/firestore';  // Import Timestamp from firestore

export const fetchBookings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'bookings'));
    const bookingsList = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log('Booking Data:', data); // Debugging line to check the data

      // Convert Firestore timestamp to Date if necessary
      const bookedAt = data.bookedAt instanceof Timestamp ? data.bookedAt.toDate() : null;
      const checkOutDate = data.checkOutDate instanceof Timestamp ? data.checkOutDate.toDate() : null;

      // Default to 'N/A' if 'persons' field is missing
      const persons = data.persons || 'N/A';

      bookingsList.push({
        id: doc.id,
        roomId: data.roomId,
        price: data.price,
        persons,  // Ensure persons is included
        userId: data.userId,
        roomName: data.roomName,
        bookedAt,  // Format the booking date
        checkOutDate,  // Ensure check-out date is included
      });
    });

    return bookingsList;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};
