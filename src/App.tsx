/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Formations from './components/Formations';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Mentors from './components/Mentors';
import Numbers from './components/Numbers';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-gray-300 selection:bg-brand-purple/30 selection:text-white">
      <CustomCursor />
      <Header />
      
      <main>
        <Hero />
        <Numbers />
        <Partners />
        <About />
        <Formations />
        <Technologies />
        <Testimonials />
        <Mentors />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
