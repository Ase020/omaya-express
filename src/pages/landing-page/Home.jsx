import {
  ArticlesSection,
  CTA,
  ContactUs,
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
    </section>
  );
};

export default Home;
