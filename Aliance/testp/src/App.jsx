import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import StepSection from './stepSection/StepSection'
import PartnerSection from './partnerSection/PartnerSection'
import OfferSection from './offerSection/OfferSection'
import MissionSection from './missionSection/MissionSection'
import MarkSection from './markSection/MarkSection'
import ContractSection from './contractSection/ContractSection'
import BlogSection from './blogSection/BlogSection'
import Header2 from './header2/Header2';
import Header from './header/Header'
import SingleBlock from './singleBlock/SingleBlock';
import ProductionSection  from './productionSection/ProductionSection';
import MissionFactorySection from './missionFactorySection/MissionFactorySection';
import PolSection from './polSection/PolSection';
import ErrorSection from './errorSection/ErrorSection';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header></Header>
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
        }/>
        <Route path="/about" element={
          <main>
              <Header2></Header2>
              <SingleBlock title="о компании"/>
              <ProductionSection></ProductionSection>
              <MissionFactorySection></MissionFactorySection>
              <MissionSection></MissionSection>
              <PartnerSection></PartnerSection>
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/contract_product" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Контрактное производство"/>
              <ContractSection></ContractSection>
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/product_avtohim" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Автмобильная химия"/>
              <StepSection></StepSection>
              <PartnerSection></PartnerSection>
              <OfferSection></OfferSection>
          </main>
        }/>
         <Route path="/own_product" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Собственные торговые марки"/>
              <MarkSection></MarkSection>
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/product_ag-tech" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Автохимия AG_TECH"/>
              <StepSection></StepSection>
              <PartnerSection></PartnerSection>
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/blog" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Блог"/>
              <BlogSection></BlogSection>
              <OfferSection></OfferSection>
          </main>
        }/>
         <Route path="/blog-more" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Современная методология разработки одухотворила всех причастных"/>
              <BlogSection></BlogSection>
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/contact" element={
          <main>
             
            <Header2></Header2>
            <SingleBlock title="Контакты"/>
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/politics" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Политика конфиденциальности"/>
             <PolSection></PolSection>
          </main>
        }/>
        <Route path="*" element={
          <main>
            <Header2></Header2>
            <ErrorSection></ErrorSection>
          </main>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

