import {
  ArticlesSection,
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
    </section>
  );
};

export default Home;
