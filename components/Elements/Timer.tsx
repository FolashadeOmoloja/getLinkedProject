import { Unica_One } from "next/font/google"

const unicaOne = Unica_One({
  subsets: ['latin'],
  weight: '400'
})

const Timer = () => {
  return (
    <div className={unicaOne.className}>
    <div className="flex gap-2 text-[64px] mt-[77px] max-sm:text-[48px] max-lg:justify-center max-sm:mt-[14px]" >
       <span>00<span className="text-sm">H</span></span>
       <span>00<span className="text-sm">M</span></span>
       <span>00<span className="text-sm">S</span></span> 
    </div>
</div>
  )
}

export default Timer