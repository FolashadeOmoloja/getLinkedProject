import CTAButton from "@/components/Elements/CTAButton"
import Timer from "@/components/Elements/Timer"



const HeroSection = () => {
  return (
    <main className="pl-[128px] max-slg:px-[30px] pt-[32px] border-bottom">
       <section className="relative flex flex-col items-center lg:justify-end lg:items-end lg:mr-[50px] ">
         <p className="italic font-bold text-[36px] max-slg:text-[28px] max-sm:text-[16px] max-xsm:text-[12px]  ">Igniting a Revolution in HR Innovation</p>
         <div className="absolute lg:right-0 right-5 bottom-[-6px]">
           <img src="/line.png" alt="img" className="w-[253px] h-[11px] max-sm:w-[115px] max-sm:h-[7px] max-xsm:w-[90px]" />
         </div>
       </section>
       {/* This is the Title section */}
       <section className="pt-[123px] max-sm:pt-[44px] flex max-lg:flex-col max-lg:items-center">
        {/* //This is the section with the information about the website */}
          <section className="Left-Section max-lg:text-center">
            {/* GetLinked heading div */}
             <div className="relative flex flex-col ">
                 <img src="/smalltbuld.png" alt="" className="w-[53px] h-[73px] max-md:w-[18px] max-md:h-[26px] mr-[50px] right-0 top-[-50px] absolute max-md:top-[-10px] max-sm:mr-8 "/>
                 <h1 className="clash-display-bold text-[70px] max-md:text-[32px] ">getlinked Tech</h1>
             </div>
             {/* Hackthon 1.0 and images div */}
             <div className="flex items-center">
              <span className="clash-display-bold text-[70px] max-md:text-[32px] ">Hackthon <span className="text-[#D434FE]">1.0</span>
              </span>

              <img src="/chain.png" alt="chain-img" className="w-[86px] max-md:w-[32px]"/>
              <img src="/blast.png" alt="blast-img" className="w-[58px]  max-md:w-[22px] "/>   
             </div>
             <div className="flex w-full max-lg:justify-center">
                 <p className="text-[20px] w-[520px] max-sm:w-[264px] max-sm:text-[13px] mt-2 ">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                 </div>
             {/* call to acttion button */}
                <div className="mt-[41px] max-sm:mt-24px w-full">
                <CTAButton className="max-lg:m-auto"/>
                </div>
            <Timer/>
          </section>
          {/* right section with image */}
          <section className="right-section basis-1/2 h-full">
             <img src="/mann.svg" alt=""  className=""/>
          </section>
          
          
       </section>
    </main>
  )
}

export default HeroSection