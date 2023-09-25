import { CriteriaSection } from "@/components/HomePage/CriteriaSection"
import { FAQ } from "@/components/HomePage/FAQ"
import { Guidelines } from "@/components/HomePage/Guidelines"
import Header from "@/components/HomePage/Header/Header"
import { IntroductionSection } from "@/components/HomePage/Introduction"
import { Timeline } from "@/components/HomePage/Timeline"

const page = () => {
  return (
 <section className="text-white">
      <Header/>
      <IntroductionSection/>
      <Guidelines/>
      <CriteriaSection/>
      <FAQ/>
      <Timeline/>

 </section>
  )
}

export default page