import FaqBox from "../Elements/FAQBox"


export const FAQ = () => {
  return (
    <section className="Container-style pt-[50px] bg-[url('/criteriabg.svg')] max-md:bg-none faqbg">
    <section className="left-section text-container mt-[70px] relative">
        <section className="">
            <div className="absolute left-[-40px] top-[-50px] max-sm:top-[30px]">
                <img src="/purplestar.svg" alt="purple-star" className="w-[30] h-[36] max-sm:w-[10px]"/>
            </div>
            <h2 className="title">Frequently Ask <br />
                 <span className="text-[#D434FE] ">Question</span>
            </h2>
            <p className="text-sm max-sm:text-[13px] leading-[27.5px] ">
            We got answers to the questions that you might want to ask about <span className="font-semibold">getlinked Hackathon 1.0</span>
            </p>
        </section>
        {/* Faq section */}
        <section className="max-sm:text-left">
             <FaqBox/>
        </section>
    </section>
    <section className="right-section  mb-[47px]">
            <img src="/faqimg.svg" alt="img" className=""/>
    </section>
</section>

  )
}
