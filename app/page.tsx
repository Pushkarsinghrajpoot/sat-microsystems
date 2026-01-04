import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import FeaturedAnnouncement from '@/components/home/FeaturedAnnouncement'
import LatestNews from '@/components/home/LatestNews'
import FeaturedInsights from '@/components/home/FeaturedInsights'
import OurPurpose from '@/components/home/OurPurpose'
import AwardsRecognitions from '@/components/home/AwardsRecognitions'
import AreasOfExpertise from '@/components/home/AreasOfExpertise'
import MeetOurClients from '@/components/home/MeetOurClients'
import Testimonials from '@/components/home/Testimonials'
import CareersSection from '@/components/home/CareersSection'
import FooterCTA from '@/components/home/FooterCTA'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedAnnouncement />
      <LatestNews />
      <FeaturedInsights />
      <OurPurpose />
      <AwardsRecognitions />
      <AreasOfExpertise />
      <MeetOurClients />
      <Testimonials />
      <CareersSection />
      <FooterCTA />
      <Footer />
    </>
  )
}
