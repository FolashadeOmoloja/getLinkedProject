


export const IntroductionSection = () => {
  return (
    <section className="Container-style">
        <section className="left-section mt-[62px] max-sm:mt-[27px]">
            <img src="/idea.svg" alt="idea-image" className="w-[490px] h-[477px] max-sm:w-[264px] max-sm:h-[257px]"/>
        </section>
        <section className="relative right-section text-container">
              <div className="absolute right-0 top-[20px] max-sm:top-[30px]">
                 <img src="/purplestar.svg" alt="purple-star" className="w-[30] h-[36] max-sm:w-[10px]"/>
              </div>
             <h2 className="title">Introduction to getlinked <br />
             <span className="text-[#D434FE] ">tech Hackathon 1.0</span>
             </h2>
             
             <p className="text-sm leading-[27.5px] max-sm:text-[13px]">
             Our tech hackathon is a melting pot of visionaries, and its purpose is as
             clear as day: to shape the future. Whether you're a coding genius, a 
             design maverick, or a concept wizard, you'll have the chance to transform 
             your ideas into reality. Solving real-world problems, pushing the boundaries
             of technology, and creating solutions that can change the world,
             that's what we're all about!
             </p>
        </section>
    </section>
  )
}