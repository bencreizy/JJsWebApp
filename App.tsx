import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ActionIcons from './ActionIcons';
import AnimatedIcons from './AnimatedIcons';
import CollisionServices from './CollisionServices';
import Contact from './Contact';
import Footer from './Footer';
import LogoFadeIn from './LogoFadeIn';
import RepairServices from './RepairServices';
import ServiceIcons from './ServiceIcons';
import SocialIcons from './SocialIcons';
import Technicians from './Technicians';
import Testimonials from './Testimonials';
import VideoIntro from './VideoIntro';
import Welcome from './Welcome';

import './index.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ActionIcons />
      <AnimatedIcons />
      <LogoFadeIn />
      <VideoIntro />
      <Welcome />
      <CollisionServices />
      <RepairServices />
      <ServiceIcons />
      <Technicians />
      <Testimonials />
      <SocialIcons />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
