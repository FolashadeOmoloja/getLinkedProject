import React from 'react'
import NumberLine from '../Elements/NumberLine'
import { TimelinePoints } from '@/constants'

export const Timeline = () => {
  return (
   <section className='px-[128px] max-slg:px-[30px] pt-[72px]'>
           <section className='flex flex-col items-center gap-[21px]'>
              <h5 className='font-bold'>Timeline</h5>
               <p className='w-[346px] max-sm:w-[292px] text-sm text-center'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
           </section>
           <section className='md:mt-[91px] mt-[59px] gap-[11px] flex flex-col items-center'>

                      {
                        TimelinePoints.map((items,index) =>(
                        <div style={{ whiteSpace: "pre-line" }} className='flex even:flex-row-reverse w-full justify-between text-[20px] font-bold max-md:text-[12px] text-[#D434FE] items-end timeline max-md:odd:flex-row-reverse max-md:gap-1' key={index}>
                            <div className='timelinetext' >
                            <span >{items.span}</span>
                              <p className='text-white text-sm max-md:text-[12px] font-normal w-[460px] max-slg:w-[270px]'>{items.text}</p>
                            <span className='hidden max-md:block'>{items.date}</span>
                            </div>
                            <NumberLine number={items.num}/>
                            <div className='max-md:hidden w-[460px] max-slg:w-[270px] timelinedate'>
                            <span className='w-full max-md:hidden' >{items.date}</span>
                            </div>
                        </div>
                        )

                        )
                      }
           
           </section>
   </section>
  )
}
