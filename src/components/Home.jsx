import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DateTimePicker from '../components/DateTimePicker'; // Assuming this component handles date input
import natureImageUrl from '../assets/living-room-1835923_1280.jpg'; // Example image
import natureImageUrl2 from '../assets/pexels-jvdm-1457842.jpg';
import natureImageUrl3 from '../assets/pexels-pixabay-262048.jpg';



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import ImageUrl from '../components/gallery/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpeg';
import ImageUrl2 from '../components/gallery/Modern Bedroom with Natural View.jpeg';
import ImageUrl3 from '../components/gallery/Modern Hotel Room Interior.jpeg';
import ImageUrl4 from '../components/gallery/Contemporary Elegance Dining Room.jpeg';

export default function Home() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [persons, setPersons] = useState(1);
  const navigate = useNavigate();

  // Handle booking button click, pass booking data to HotelBooking
  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select both check-in and check-out dates.');
      return;
    }

    const bookingDetails = {
      checkInDate,
      checkOutDate,
      rooms,
      persons
    };

    navigate('/hotelbooking', { state: bookingDetails });
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${natureImageUrl})` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-6xl mb-4">
            THE BEST LUXURY HOTEL
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 mb-12">
            Experience elegance, comfort, and world-class amenities in the heart of the city.
          </p>
          <div className="flex justify-center gap-x-6 mb-16">
            <Link
              to="/aboutus"
              className="rounded-md bg-[#BB9D6A] px-6 py-3 text-lg font-semibold text-black hover:bg-indigo-500 transition"
            >
              Read More
            </Link>
          </div>

          {/* Booking Section */}
          <div className="box-content h-11 w-10/12 ml-20 p-4 flex items-center justify-between bg-[#1E1E1E] rounded-md text-black">
            <div className="check-in mx-2">
              <DateTimePicker
                label="Check-in Date"
                selectedDate={checkInDate}
                onChange={setCheckInDate}
              />
            </div>
            <div className="check-out mx-2">
              <DateTimePicker
                label="Check-out Date"
                selectedDate={checkOutDate}
                onChange={setCheckOutDate}
              />
            </div>
            <div className="rooms mx-2">
              <select
                className="px-3 py-2 rounded-md bg-gray-800"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
              >
                {[1, 2, 3, 4].map((room) => (
                  <option key={room} value={room}>
                    {room} Room{room > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            <div className="persons mx-2">
              <select
                className="px-3 py-2 rounded-md bg-gray-800"
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((person) => (
                  <option key={person} value={person}>
                    {person} Person{person > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            <div className="book-now mx-2">
              <button
                onClick={handleBooking}
                className="p-2 bg-[#BB9D6A] rounded-md text-white hover:bg-[#A68A57] transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-16 bg-gray-50">
  <h2 className="text-3xl font-semibold text-gray-800 mb-8">
    ROYELLA’S ROOMS & SUITES
  </h2>
  <p className="text-lg text-gray-600 mb-12">
    The only difference between a hotel and a home is the absence of noise.
  </p>

  <div className="flex justify-center gap-8">
    {[natureImageUrl, natureImageUrl2, natureImageUrl3].map((imageUrl, index) => (
      <div key={index} className="flex-1 max-w-xs rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-56 object-cover" src={imageUrl} alt={`Room ${index + 1}`} />
        <div className="p-6 bg-white">
          <h5 className="mb-2 text-xl font-medium text-gray-800">
            Double Suite Room {index + 1} <h6 className=""style={{fontSize:'8px'}}>⭐⭐⭐⭐⭐</h6>
          </h5>
          <p className="mb-4 text-base text-gray-600">R830/per night</p>
          <Link to="/hotelbooking">
            <button className="px-6 py-2 text-sm text-white bg-[#BB9D6A] rounded-md hover:bg-[#A68A57] transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


     



<div className="heading flex justify-center">
        <p className='text-3xl'>Hot Deals</p>
      </div>
      <div className='bookNow flex gap-2 p-9 justify-center'>
        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ImageUrl}
              alt="Serene Earth-Toned Bedroom"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Extraordinary Moments. Made for You.
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Experience the Orlando Pirates with our package, including 5,000 Marriott Bonvoy points per stay in a football club themed guest room. Enjoy daily breakfast and a special memorabilia welcome gift.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ImageUrl3}
              alt="Modern Hotel Room Interior"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                More Local Adventures… Why Not?
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                As a Marriott Bonvoy member, you save an additional 5% on the promotional rate when you book to stay for 3 or more consecutive nights.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ImageUrl2}
              alt="Modern Bedroom with Natural View"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reconnect with the family for less.
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Holidays are a time to reconnect with the people who matter most.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          
          </CardActions>
        </Card>

      </div>

      <div className="deals flex justify-center">
        <button className='p-3 bg-neutral-600 text-white'>
          See All Deals
        </button>
      </div>

      <div className="experience flex justify-center mt-6">
    <a  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ImageUrl4} alt="Noteworthy technology acquisitions 2021" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                DISCOVER ENDLESS DINING EXPERIENCES…
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Introducing More Cravings by Marriott Bonvoy™, an online platform that offers an incredibly diverse range of dining options. If you are a passionate foodie or socialiser, you can now connect with great experiences in fantastic settings at the click of a button.
            </p>
        </div>
    </a>
</div>


    </>
  );
}
