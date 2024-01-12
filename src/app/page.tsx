import homeImage from "../../public/images/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      imgData={homeImage}
      title='Professional Cloud Hosting'
      imgAlt='Car Factory'
    />
  );
}
