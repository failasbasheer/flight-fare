// 'use client';

// import { useState } from 'react';
// import Navbar from '@/components/navbar';
// import HeroSection from '@/components/hero-section';
// import DemoSearchForm from '@/components/demo-search-form';
// import ApiOverviewSection from '@/components/api-overview-section';
// import EndpointSection from '@/components/endpoint-section';
// import DeveloperGuideSection from '@/components/developer-guide-section';
// import Footer from '@/components/footer';

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <main>
//         <HeroSection />
//         <section id="demo" className="py-16 px-4 md:py-24 bg-muted/30">
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-balance">Try the Demo</h2>
//             <p className="text-center text-muted-foreground mb-12 text-balance">Predict flight prices in seconds with our AI-powered API</p>
//             <DemoSearchForm />
//           </div>
//         </section>
//         {/* <ApiOverviewSection />
//         <EndpointSection /> */}
//         <DeveloperGuideSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }



// app/page.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";

import Footer from "@/components/footer";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <Navbar />

        <AnimatePresence mode="wait">
          <main>
            <HeroSection />
            <AboutSection/>

  
          </main>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
}
