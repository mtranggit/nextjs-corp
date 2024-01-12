import Hero from "@/components/hero";
import performanceImage from "../../../public/images/performance.jpg";
export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImage}
      title='We service high performance applications'
      imgAlt='Welding Factory'
    />
  );
}
