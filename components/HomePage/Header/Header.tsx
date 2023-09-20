import HeroSection from "./HeroSection"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="bg-[url('/headerbg.svg')] bg-no-repeat  h-[100vh]">
        <Navbar/>
        <HeroSection/>
    </header>
  )
}

export default Header