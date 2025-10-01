import WhyChooseUs from '@/components/section/why-choose-us';
import Testimonials from '@/components/section/testimonials';

export default function Home() {
  return (
    <div>
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>This is al taj site</h1>
      </div>
      
      <WhyChooseUs />
      
      <Testimonials />
    </div>
  );
}

