import WhyChooseUs from '@/components/section/why-choose-us';
import Testimonials from '@/components/section/testimonials';
import HeroSection from '@/components/section/herosection';
import TableTime from '@/components/section/table-time';
export default function Home() {
  return (
    <div>
      <HeroSection />

      <TableTime />
      
      <WhyChooseUs />
      
      <Testimonials />
    </div>
  );
}

