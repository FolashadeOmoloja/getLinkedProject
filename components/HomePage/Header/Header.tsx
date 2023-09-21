import HeroSection from "./HeroSection"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="bg-[url('/headerbg.svg')] bg-no-repeat  header max-sm:bg-none">
      <Navbar />
      <HeroSection />
    </header>
  );
};

export default Header;
