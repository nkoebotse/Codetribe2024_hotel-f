import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import ImageUrl from '../gallery/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpeg';
import ImageUrl2 from '../gallery/Modern Bedroom with Natural View.jpeg';
import ImageUrl3 from '../gallery/Modern Hotel Room Interior.jpeg';
import ImageUrl4 from '../gallery/Contemporary Elegance Dining Room.jpeg';
import { Link } from 'react-router-dom';
export default function MultiActionAreaCard() {
  return (
    <>
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
          <Link
                to="/HotelBooking"
                className="rounded-md bg-[#BB9D6A] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
            <Button size="small" color="primary">
              Book Now
            </Button>
            </Link>
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
          <Link
                to="/HotelBooking"
                className="rounded-md bg-[#BB9D6A] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
            <Button size="small" color="primary">
              Book Now 
            </Button>
            </Link>
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
          <Link
                to="/HotelBooking"
                className="rounded-md bg-[#BB9D6A] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
            <Button size="small" color="primary">
              Book Now
            </Button>
            </Link>
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
