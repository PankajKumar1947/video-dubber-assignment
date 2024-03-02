import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Rating from "@/components/Rating";
import Review from "@/components/Review";
import Step from "@/components/Step";
import Working from "@/components/Working";

export default function Home() {
  return (
    <div>   
      <Hero/>
      <Rating/>
      <Working/>
      <Features/>
      <Step/>
      <Review/>
    </div>
  );
}
