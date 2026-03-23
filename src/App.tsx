/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Catalogue from "./components/Catalogue";
import SocialProof from "./components/SocialProof";
import Bonuses from "./components/Bonuses";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FormModal from "./components/FormModal";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <Catalogue />
      <SocialProof />
      <Bonuses />
      <CTA />
      <Footer />
      <FormModal />
    </div>
  );
}
