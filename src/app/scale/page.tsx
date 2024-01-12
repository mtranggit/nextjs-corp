import Hero from "@/components/hero";
import scaleImage from "../../../public/images/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImage}
      title='Scale your applications to infinity'
      imgAlt='Steel Factory'
    />
  );
}
