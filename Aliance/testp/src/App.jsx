import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import AboutSection from './aboutSection/AboutSection.jsx'
import StepSection from './stepSection/StepSection'
import PartnerSection from './partnerSection/PartnerSection'
import OfferSection from './offerSection/OfferSection'
import MissionSection from './missionSection/MissionSection'
import MarkSection from './markSection/MarkSection'
import ContractSection from './contractSection/ContractSection'
import BlogSection from './blogSection/BlogSection'
import Header from './header/Header';
import Header2 from './header2/Header2';
import SingleBlock from './singleBlock/SingleBlock';
import ProductionSection  from './productionSection/ProductionSection';
import MissionFactorySection from './missionFactorySection/MissionFactorySection';
import PolSection from './polSection/PolSection';
import ErrorSection from './errorSection/ErrorSection';
import Footer from './footer/Footer';
import SeoSection from './seoSection/SeoSection';
import IconSection from './iconSection/IconSection';
import MissionChim from './missionChim/MissionChim';
import CenterSection from './centerSection/CenterSection.jsx';

import {mission2, chim, ag_tech, chim_create, mission1} from './data.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <main>
            <Header></Header>
            <AboutSection></AboutSection>
            <StepSection></StepSection>
            <ContractSection></ContractSection>
            <MarkSection></MarkSection>
            <MissionSection title={mission2.title} text1={mission2.text1} text2={mission2.text2} image={mission2.img}></MissionSection>
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
              <IconSection></IconSection>
              <MissionFactorySection title={mission1.title} text1={mission1.text1} text2={mission1.text2} img={mission1.img}></MissionFactorySection>
              <MissionSection title={mission2.title} text1={mission2.text1} text2={mission2.text2} image={mission2.img}></MissionSection>
              <CenterSection></CenterSection>
              <PartnerSection></PartnerSection>
              
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/contract_product" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Контрактное производство"/>
              <ContractSection></ContractSection>
              <SeoSection></SeoSection>
              <OfferSection></OfferSection>
          </main>
        }/>
        <Route path="/product_avtohim" element={
          <main>
            <Header2></Header2>
             <SingleBlock title="Автомобильная химия"/>
             <MissionChim title={chim.title} text1={chim.text1} text2={chim.text2} image={chim.img}></MissionChim>
             <IconSection/>
             <MissionFactorySection title={chim_create.title} text1={chim_create.text1} text2={chim_create.text2} img={chim_create.img}></MissionFactorySection>
              <CenterSection/>
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
              <MissionChim title={ag_tech.title} text1={ag_tech.text1} text2={ag_tech.text2} image={ag_tech.img}></MissionChim>
             <IconSection/>
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
      <Footer/>
    </BrowserRouter>
  )
}

