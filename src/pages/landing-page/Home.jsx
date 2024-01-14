import {
  ArticlesSection,
  CTA,
  ContactUs,
  FAQ,
  HeroSection,
  SetupProcess,
} from "./sections";

const Home = () => {
  return (
    <section className="bg-dark text-white">
      <HeroSection />
      <SetupProcess />
      <ContactUs />
      <ArticlesSection />
      <CTA />
      <FAQ />
    </section>
  );
};

export default Home;
