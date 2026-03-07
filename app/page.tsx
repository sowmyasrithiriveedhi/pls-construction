
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";

export default function Home() {
  return (
    <>
      <Hero />

      <InfoSection
        title="High-Quality Construction Materials"
        description="We provide durable and high-strength construction materials designed to build strong foundations and long-lasting structures. Trusted by contractors and builders across locations."
        image="/images/section1.jpg"
      />

      <InfoSection
        title="Reliable Service & On-Time Delivery"
        description="With multiple branch locations and a strong supply network, we ensure timely delivery and customer satisfaction. We focus on reliability, trust, and long-term partnerships."
        image="/images/section2.jpg"
        reverse
      />
    </>
  );
}