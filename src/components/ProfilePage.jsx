// ProfilePage.js
import  { useState, useEffect } from 'react';
import { auth, db } from '../config/firbase';  // Assuming you're using Firebase for authentication
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchProfileData(currentUser.uid);
      } else {
        navigate('/login');
      }
    });
    return unsubscribe;
  }, [navigate]);

  const fetchProfileData = async (uid) => {
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      setProfile(docSnap.data());
    } else {
      console.log('No user data found');
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDocRef = doc(db, 'users', user.uid);
    
    try {
      await updateDoc(userDocRef, profile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
      {user && (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
