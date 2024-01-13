import { ContactUs, HeroSection, SetupProcess } from "./sections";

const Home = () => {
  return (
    <section className="bg-dark text-white">
      <HeroSection />
      <SetupProcess />
      <ContactUs />
    </section>
  );
};

export default Home;
