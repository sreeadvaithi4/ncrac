import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";

import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { Download, BookOpen, Building2, GraduationCap } from "lucide-react";

const topics = [
"Energy efficiency & cold/heat recovery",
"Novel/alternate ecofriendly RAC systems",
"Natural/new refrigerants & mixtures",
"Refrigerated cold chain, transport & cold stores",
"Sorption heating and cooling systems",
"District heating and cooling",
"Desiccant and evaporative cooling",
"Polygeneration",
"Heat pump",
"Indoor air quality and Industrial ventilation",
"HVAC systems for Healthcare Applications",
"Clean Room for semiconductor / Solar PV / Automobile / Pharma sectors",
"Green buildings",
"Building management systems",
"Modern innovations in HVAC systems",
"Low temperature applications",
"Application of IoT in RAC",
"AI/ML models for refrigeration systems",
"Role of CFD in HVAC design",
"Refrigeration cycles",
"Thermal comfort and comfort standards",
"Thermal energy storage"];


const Index = () => {
  return (
    <PageLayout>
      <HeroSection />

      {/* About NCRAC */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="About NCRAC" />
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <BookOpen className="text-accent shrink-0 mt-1" size={28} />
                <p className="text-foreground leading-relaxed">
                  ​The National Conference on Refrigeration and Air Conditioning (NCRAC) was initiated at IIT Madras in 2009 and subsequently held as a biennial event in 2011 and 2013. The 4 NCRAC was hosted by Rajalakshmi College of Engineering, Chennai in 2015, followed by the 5th NCRAC at NITK Surathkal in 2018. The 6th NCRAC returned to IIT Madras, while the 7th NCRAC in 2022, organized by IIT Guwahati in association with IIT Tirupati, marked the first international edition of the conference. The most recent edition, NCRAC 2024, was hosted by IIT Madras. Building on this legacy, NCRAC 2026 aims to provide an international platform for the discussion and dissemination of cutting-edge research in refrigeration and air conditioning to the global community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-beige py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Conference Objectives" />
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-8 border border-border shadow-sm">
              <p className="text-foreground leading-relaxed">
                
The aspirations and living standards of humankind continue to rise alongside rapid technological progress, while challenges such as environmental degradation, global warming, and climate change demand urgent attention. Meeting human comfort and industrial needs in an environmentally sustainable manner places Refrigeration and Air Conditioning (RAC) at the forefront of technological innovation. Beyond human comfort, RAC systems are essential to sectors including food preservation, healthcare, space exploration, and digital infrastructure, and currently account for nearly 20% of global electricity consumption. Although international efforts such as the Montreal Protocol have successfully addressed ozone depletion, the goals of the Kyoto Protocol and Paris Agreement-particularly reducing greenhouse gas emissions and limiting global temperature rise to within 2°C-remain ongoing challenges. Addressing these issues requires the development of eco-friendly refrigerants, innovative system architectures, integration with renewable energy, and life-cycle-based sustainability approaches. This conference aims to bring together researchers, academicians, industry professionals, and policymakers to discuss these challenges, showcase emerging technologies, and chart a path toward a low-carbon, energy-efficient, and sustainable future for refrigeration and air conditioning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About IIT Tirupati */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="About IIT Tirupati" />
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <Building2 className="text-accent shrink-0 mt-1" size={28} />
                <p className="text-foreground leading-relaxed">
                  IIT Tirupati, established in 2015, began functioning in the academic year 2015–16 with the support of its mentoring institute, IIT Madras. By 2018, its academic programs had expanded to nine departments spanning engineering, sciences, and humanities, offering B.Tech, M.Tech, M.Sc, M.S.(R), and PhD programmes. Its curricula emphasize a strong foundation in theory complemented by practice-oriented laboratories, fostering innovation, creativity, teamwork, communication skills, ethics, and societal engagement. The permanent campus, spread over 548 acres, is under development, with several buildings operational since 2018. IIT Tirupati is also developing an 18-acre research park on its campus, set to be one of the largest in India upon completion. This facility aims to foster innovation, entrepreneurship, and industry-academia collaborations in areas like smart infrastructure, energy, and AI. Located in Tirupati, the institute benefits from an airport and excellent connectivity to Chennai and Bengaluru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Mechanical Engineering */}
      <section className="section-beige py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Department of Mechanical Engineering" />
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-accent shrink-0 mt-1" size={28} />
                <p className="text-foreground leading-relaxed">
                  ​The Department of Mechanical Engineering at IIT Tirupati, established in 2015, is a dynamic and rapidly growing academic unit offering programmes at multiple levels, including B.Tech, M.Tech (with specializations in Design & Manufacturing and Thermal Engineering and Energy Systems), as well as MS (R) and phd programmes. Recently, M.Tech programmes in Computational Mechanics and Executive M.Tech in Manufacturing have been approved. The faculty are actively engaged in diverse research areas such as renewable and wind energy, thermal energy storage, hydrogen production and storage, compact heat exchangers, advanced manufacturing, advanced materials, CFD, fluid-structure interaction, multiphase flows, robotics, aerial and underwater drones, precision agriculture, and food processing, and theoretical and applied mechanics. The department is supported by well-equipped instructional and research laboratories, central workshop, and state-of-the-art facilities, and is recognized for its interdisciplinary collaborations, industry-aligned curriculum, and strong emphasis on applied research.














                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Conference Topics" />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
            {topics.map((topic, i) => <div key={i} className="flex items-start gap-2 bg-card rounded-lg p-3 border border-border text-sm">

                <span className="text-accent font-bold mt-0.5">›</span>
                <span className="text-foreground">{topic}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Participate?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Submit your abstract and register for NCRAC 2026 to be part of India's premier conference on Refrigeration and Air Conditioning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/registration" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-300">

              Register Now
            </Link>
            <Link to="/important-dates" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">

              View Important Dates
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>);};export default Index;