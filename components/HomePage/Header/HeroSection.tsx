

const HeroSection = () => {
  return (
    <main className="px-[128px] max-slg:px-[30px] pt-[32px]">
       <section className="relative flex flex-col justify-end items-end">
         <p className="italic font-bold text-[36px] max-slg:text-[28px] max-sm:text-[16px] max-xsm:text-[12px]">Igniting a Revolution in HR Innovation</p>
         <div className="absolute right-0 bottom-[-6px]">
           <img src="/line.png" alt="" className="w-[253px] h-[11px] max-sm:w-[115px] max-sm:h-[7px] max-xsm:w-[90px]" />
         </div>
       </section>
       <section className="pt-[123px]">
          <div >
             <h1 className="clash-display-bold text-[70px]">getlinked Tech</h1>
          </div>
       </section>
    </main>
  )
}

export default HeroSection