import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Reviews from "@/components/reviews";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Tools />
      <Reviews />
      <Footer />
    </main>
  );
}
