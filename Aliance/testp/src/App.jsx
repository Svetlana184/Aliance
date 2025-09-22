
import './App.css'
import StepSection from './stepSection/StepSection'
import PartnerSection from './partnerSection/PartnerSection'
import OfferSection from './offerSection/OfferSection'
import MissionSection from './missionSection/MissionSection'
import MarkSection from './markSection/MarkSection'
import ContractSection from './contractSection/ContractSection'
import BlogSection from './blogSection/BlogSection'

export default function App() {
  return (
    <>
    <main>
      <StepSection></StepSection>
      <ContractSection></ContractSection>
      <MarkSection></MarkSection>
      <MissionSection></MissionSection>
      <PartnerSection></PartnerSection>
      <BlogSection></BlogSection>
      <OfferSection></OfferSection>
    </main>
     
    </>
  )
}

