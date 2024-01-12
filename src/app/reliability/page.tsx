import Hero from "@/components/hero";
import reliablityImage from "../../../public/images/reliability.jpg";
export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliablityImage}
      title='Super high reliablity hosting'
      imgAlt='Welding Factory'
    />
  );
}
