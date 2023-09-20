import { NavLinks } from "@/constants"
import MobileSidebar from "./MobileNav"
import CTAButton from "@/components/Elements/CTAButton"


const Navbar = () => {
  return (
     <nav className="pt-[63px] px-[128px] max-slg:px-[50px] pb-[30px] text-white flex justify-between items-center border-b-[1px] border-white max-xsm:pt-[30px] max-xsm:pb-[23px]">
         <div>
             <img src={"/getlinked.svg"} width={171} height={44} alt={"logo"} className="max-xsm:w-[72px] max-xsm:h-[18px]"/>
         </div>
          <div className="flex items-center gap-[122px] max-lg:hidden">
          <ul className='flex  gap-[56px]'>
          {NavLinks.map((item) => (
            <li key={item.label} className="nav-links">
              <a
                href={item.href}
                className=''
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
         <CTAButton/>
          </div>
          <div className="lg:hidden">
             <MobileSidebar/>
          </div>
     </nav>
  )
}

export default Navbar