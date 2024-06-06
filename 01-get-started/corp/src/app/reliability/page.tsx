import reliabilityImg from "public/reliability.jpg";
import Hero from "@/components/hero";

export default function ReliabilityPage() {
  return (
    <main>
      <Hero
        imgData={reliabilityImg}
        imgAlt="welding"
        title="Superior reliability and uptime"
      />
    </main>
  );
}
