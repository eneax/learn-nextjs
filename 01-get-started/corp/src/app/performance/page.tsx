import performanceImg from "public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <main>
      <Hero
        imgData={performanceImg}
        imgAlt="welding"
        title="We serve high-performance applications"
      />
    </main>
  );
}
