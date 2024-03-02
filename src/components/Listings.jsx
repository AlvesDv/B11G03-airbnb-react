import HouseCard from './HouseCard'
import Nav from './Nav'

function Listings() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Flexbox for new listings */}
      <div className="grid grid-cols-2 gap-20 bg-pink-200">
        <HouseCard />
        <HouseCard />
      </div>

      {/* Flexbox to display existing house listings */}
      <div className="grid grid-cols-5 gap-3 bg-pink-200">
        <div className="bg-pink-600">1</div>
        <div className="bg-pink-600">2</div>
        <div className="bg-pink-600">3</div>
        <div className="bg-pink-600">4</div>
        <div className="bg-pink-600">5</div>
        <div className="bg-pink-600">6</div>
        <div className="bg-pink-600">7</div>
      </div>
    </div>
  )
}

export default Listings
