

export const Guidelines = () => {
  return (
    <section className="Container-style max-lg:flex-col-reverse bg-[url('/guidelinebg.svg')] guidelinebg">
          <section className="left-section text-container">
            <h2 className="title">Rules and <br />
             <span className="text-[#D434FE] ">Guidelines</span>
             </h2>
             <p className="text-sm max-sm:text-[13px] leading-[27.5px] ">
             Our tech hackathon is a melting pot of visionaries, and its purpose is as
             clear as day: to shape the future. Whether you're a coding genius, a 
             design maverick, or a concept wizard, you'll have the chance to transform 
             your ideas into reality. Solving real-world problems, pushing the boundaries
             of technology, and creating solutions that can change the world,
             that's what we're all about!
             </p>
          </section>
          <section className="right-section relative">
                 <div className="absolute left-0 bottom-[30%] max-sm:bottom-[50%]">
                    <img src="/whitestar.svg" alt="white-star" className="w-[26] h-[32] max-sm:w-[10px] max-sm:h-[12px]" />
                 </div>
                 <img src="/guidelineimg.svg" alt="img" className="w-[664px]" />
          </section>
    </section>
  )
}
