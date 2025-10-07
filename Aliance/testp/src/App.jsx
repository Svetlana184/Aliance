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
import HimlistSection from './himlistSection/HimlistSection.jsx';
import DistributeSection from './distributeSection/DistributeSection.jsx';
import BigBlogSection from './bigBlogSection/BigBlogSection.jsx';
import MapSection from './mapSection/MapSection.jsx';
import ParagraphSection from './paragraphSection/ParagraphSection.jsx';

import {mission2, chim, ag_tech, chim_create, mission1} from './data.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <main>
            <Header/>
            <AboutSection/>
            <StepSection/>
            <ContractSection/>
            <MarkSection/>
            <MissionSection title={mission2.title} text1={mission2.text1} text2={mission2.text2} image={mission2.img}/>
            <PartnerSection/>
            <BlogSection/>
            <OfferSection/>
            </main>
          </>
        }/>
        <Route path="/about" element={
          <main>
              <Header2/>
              <SingleBlock title="о компании" links={[{text:"Главная", path:"/"}, {text:"О компании", path:"#"},]}/>
              <ProductionSection/>
              <IconSection/>
              <MissionFactorySection title={mission1.title} text1={mission1.text1} text2={mission1.text2} img={mission1.img} ul1={mission1.ul1} ul2={mission1.ul2}/>
              <MissionSection title={mission2.title} text1={mission2.text1} text2={mission2.text2} image={mission2.img}></MissionSection>
              <CenterSection/>
              <PartnerSection/>
              
              <OfferSection/>
          </main>
        }/>
        <Route path="/contract_product" >
              <Route index element={
                <main>
                <Header2/>
                <SingleBlock title="Контрактное производство" links={[{text:"Главная", path:"/"}, {text:"Контрактное производство", path:"#"},]}/>
                  <ContractSection/>
                  <SeoSection/>
                  <OfferSection/>
              </main>
              }/>
              <Route path='avtohim' element={
                <main>
                <Header2/>
                <SingleBlock title="Автомобильная химия" links={[{text:"Главная", path:"/"}, {text:"Контрактное производство", path:"/contract_product"},  {text:"Автомобильная химия", path:"#"}]}/>
                <MissionChim title={chim.title} text1={chim.text1} text2={chim.text2} image={chim.img}/>
                <IconSection/>
                <MissionFactorySection title={chim_create.title} text1={chim_create.text1} text2={chim_create.text2} img={chim_create.img} ul1={chim_create.ul1} ul2={chim_create.ul2}></MissionFactorySection>
                  <HimlistSection/>
                  <CenterSection/>
                  <StepSection/>
                  <PartnerSection/>
                  <OfferSection/>
              </main>
              }/>
        </Route>
         <Route path="/own_product" >
          <Route index element={ <main>
            <Header2/>
             <SingleBlock title="Собственные торговые марки" links={[{text:"Главная", path:"/"}, {text:"Собственные торговые марки", path:"#"}]}/>
              <MarkSection/>
              <OfferSection/>
          </main>}/>
          <Route path="product_ag-tech" element={
          <main>
            <Header2/>
             <SingleBlock title="Автохимия AG_TECH" links={[{text:"Главная", path:"/"}, {text:"Собственные торговые марки", path:"/own_product"}, {text:"Автохимия AG_TECH", path:"#"}]}/>
              <MissionChim title={ag_tech.title} text1={ag_tech.text1} text2={ag_tech.text2} image={ag_tech.img}/>
              
             <IconSection/>
             <DistributeSection/>
             <CenterSection/>
              <StepSection/>
              <PartnerSection/>
              <OfferSection/>
          </main>
        } />
        </Route>
        <Route path="/blog">
          <Route index element={  <main>
            <Header2/>
             <SingleBlock title="Блог" links={[{text:"Главная", path:"/"}, {text:"Блог", path:"#"}]}/>
              <BigBlogSection/>
              <OfferSection/>
          </main>}/>
          <Route path="blog-more" element={
          <main>
            <Header2/>
             <SingleBlock title="Современная методология разработки одухотворила всех причастных" links={[{text:"Главная", path:"/"}, {text:"Блог", path:"/blog"}, {text:"Современная методология разработки одухотворила всех причастных", path:"#"}]}/>
             <ParagraphSection/>
              <BlogSection title='Также вас может заинтересовать'/>
              
              <OfferSection/>
          </main>
        }/>
        </Route>
        <Route path="/contact" element={
          <main>
             
            <Header2/>
            <SingleBlock title="Контакты" links={[{text:"Главная", path:"/"}, {text:"Контакты", path:"#"}]}/>
            <MapSection />
              <OfferSection/>
          </main>
        }/>
        <Route path="/politics" element={
          <main>
            <Header2/>
             <SingleBlock title="Политика конфиденциальности" links={[{text:"Главная", path:"/"}, {text:"Политика конфиденциальности", path:"#"}]}/>
             <PolSection/>
          </main>
        }/>
        <Route path="*" element={
          <main>
            <Header2/>
            <ErrorSection/>
          </main>
        }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

