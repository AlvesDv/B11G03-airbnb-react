import Nav from './Nav'
import HouseCard from './HouseCard'

function Bookings() {
  {
    /*create array of objects with all the infomation for every booking that we get*/
  }
  const bookingCard = [
    {
      location: 'Phuket, Thailand',
      rooms: 2,
      bathrooms: 2,
      checkIn: '2024-03-20',
      checkOut: '2024-03-20',
      priceNight: 120,
      totalNights: 7,
      totalPrice: 750,
      reviewRating: 4,
      totalReviews: 12,
      photoUrl:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
    },
    {
      location: 'Phuket, Thailand',
      rooms: 2,
      bathrooms: 2,
      checkIn: '2024-03-20',
      checkOut: '2024-03-20',
      priceNight: 120,
      totalNights: 7,
      totalPrice: 750,
      reviewRating: 4,
      totalReviews: 12,
      photoUrl:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
    },
    {
      location: 'Phuket, Thailand',
      rooms: 2,
      bathrooms: 2,
      checkIn: '2024-03-20',
      checkOut: '2024-03-20',
      priceNight: 120,
      totalNights: 7,
      totalPrice: 750,
      reviewRating: 4,
      totalReviews: 12,
      photoUrl:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
    },
    {
      location: 'Goa, India',
      rooms: 56,
      bathrooms: 2,
      checkIn: '2024-03-20',
      checkOut: '2024-03-20',
      priceNight: 120,
      totalNights: 7,
      totalPrice: 500,
      reviewRating: 4,
      totalReviews: 12,
      photoUrl:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
    },
    {
      location: 'Goa, India',
      rooms: 56,
      bathrooms: 2,
      checkIn: '2024-03-20',
      checkOut: '2024-03-20',
      priceNight: 120,
      totalNights: 7,
      reviewRating: 4,
      totalPrice: 500,
      totalReviews: 12,
      photoUrl:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
    }
  ]

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-5 gap-3 bg-pink-200">
        {/* create a loop that goes into the bookingCard array and check the values / sending the info to the child(houseCard) */}

        {bookingCard.map((booking, index) => (
          <HouseCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  )
}

export default Bookings
