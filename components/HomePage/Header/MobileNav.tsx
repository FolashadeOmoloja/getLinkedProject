'use client';

import CTAButton from '@/components/Elements/CTAButton';
import { NavLinks } from '@/constants';
import { useState } from 'react';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex">
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-30" onClick={toggleSidebar}></div>
      )}

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 w-[90%] bg-[#150E28] shadow-lg z-40 transform transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-0 right-0 mt-[39px] mr-[51px]"
        >
          <img src="/cancelbar.svg" alt="closebar-icon" width={23} height={23} />
        </button>
        
        <section className='flex flex-col gap-[29px]  mt-[119px] ml-[47px]'>
            <ul className='flex flex-col gap-[20px] font-normal'>
            {NavLinks.map((item) => (
            <li key={item.label} className="nav-links">
               <a href={item.href}> {item.label}</a>
            </li>
          ))}
            </ul>
            <CTAButton/>
        </section>
      </div>

      <button
        onClick={toggleSidebar}
        className={`inset-y-0 right-0 z-50 flex items-center justify-center transition duration-300 transform ${
          isOpen ? 'hidden' : 'block'
        }`}>
        <img src="/baricon.svg" alt="bar-icon" width={19} height={14} />
      </button>
    </nav>
  );
};

export default MobileSidebar;
