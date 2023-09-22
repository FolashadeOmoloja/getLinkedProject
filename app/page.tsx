import { CriteriaSection } from "@/components/HomePage/CriteriaSection"
import { FAQ } from "@/components/HomePage/FAQ"
import { Guidelines } from "@/components/HomePage/Guidelines"
import Header from "@/components/HomePage/Header/Header"
import { IntroductionSection } from "@/components/HomePage/Introduction"

const page = () => {
  return (
 <section className="text-white">
      <Header/>
      <IntroductionSection/>
      <Guidelines/>
      <CriteriaSection/>
      <FAQ/>

 </section>
  )
}

export default page