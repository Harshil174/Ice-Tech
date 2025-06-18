import BoatVideo from "./components/BoatVideo"
import HeroText from "./components/HeroText"
import MapImages from "./components/MapImages"

const Home = () => {
  return (
    <div className="relative">
      <HeroText />
      <MapImages />
      <BoatVideo />
    </div>
  )
}

export default Home