import { Attributes } from "@/constants"
import CTAButton from "../Elements/CTAButton"

export const CriteriaSection = () => {
    return (
      <section className="Container-style pb-[70px] bg-[url('/criteriabg.svg')] relative bg-no-repeat mt-[92px] lg:gap-[53px] criteriabg max-sm:mt-[0px]">
            <section className="left-section basis-1/2 ">
                    <img src="/criteriaimg.svg" alt="img" className="w-full h-full"/>
            </section>
            <section className="right-section basis-1/2 max-lg:text-center">
                <div className="absolute left-[45%] bottom-[20%] max-lg:hidden">
                    <img src="/whitestar.svg" alt="white-star" className="w-[20px] max-sm:w-[10px] max-sm:h-[12px]" />
                 </div>
               <h3 className="title">Judging Criteria <br />
                 <span className="text-[#D434FE] ">Key attributes</span>
               </h3>
               <ul className="flex flex-col gap-[22px] mb-[55px] max-lg:text-center">
                  {
                     Attributes.map((items, index)=>(
                        <li key={index}>
                            <p className="text-sm max-sm:text-[13px] leading-[25px]"><span className="sm:text-[16px] text-[#FF26B9] font-semibold">{items.point}: </span>
                            {items.text}</p>
                        </li>
                     ))
                  }
               </ul>
               <div className="flex  max-lg:justify-center">
                   <CTAButton CTA="Read More"/>
               </div>
            </section>

      </section>
    )
  }