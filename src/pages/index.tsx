import AboutMe from "@/components/AboutContent";
import ContactContent from "@/components/ContactContent";
import ExperienceContent from "@/components/ExperienceContent";
import FooterContent from "@/components/FooterContent";
import HomeContent from "@/components/HomeContent";
import SchoolContent from "@/components/SchoolContent";
import SkillsContent from "@/components/SkillsContent";
import Head from "next/head";
import { useSelector } from "react-redux";

import ErrorModal from "@/components/modals/ErrorModal";
import HamburgerMenu from "@/components/navigation/HamburgerMenu";

export default function Home() {
  const isFormSubmit = useSelector((store: any) => store.button.isFormSubmit);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Days+One&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>RS</title>
        <meta name="description" content="Raphael Salayog Portfolio" />
      </Head>
      <main>
        {isFormSubmit && <ErrorModal />}
        <HamburgerMenu />
        <HomeContent />
        <AboutMe />
        <ExperienceContent />
        <SkillsContent />
        <SchoolContent />
        <ContactContent />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}
