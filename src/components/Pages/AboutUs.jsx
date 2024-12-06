
import ImageUrl3 from '../gallery/356230099_5733337176767378_6446168378138016491_n.jpg';
const people = [
    {
      name: 'Elliot Sekgobela',
      role: 'Founder / CEO',
      imageUrl:ImageUrl3
    },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Elliot Sekgobela is an innovative hotel CEO known for his transformative approach to the hospitality industry. With over two decades of experience, he has successfully led multiple luxury hotel chains, focusing on sustainable practices and personalized guest experiences. 
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={ImageUrl3} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>


        <div className=' mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mt-14'>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14588.909658048522!2d29.45797!3d-23.9169999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d7b140262659%3A0x9cbea9002ef42cf0!2sLimpopo%20Connexion!5e0!3m2!1sen!2sza!4v1732263970311!5m2!1sen!2sza"
    width="300"
    height="150"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>
      </div>
    )
  }
  