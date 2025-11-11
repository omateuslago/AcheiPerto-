import Navbar from "@/components/Navbar"
import HeroBanner from "@/components/HeroBanner"
import ServiceCategories from "@/components/ServiceCategories"
import FeaturedProfessionals from "@/components/FeaturedProfessionals"
import WhyChooseUs from "@/components/WhyChooseUs"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ServiceCategories />
      <FeaturedProfessionals />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  )
}
