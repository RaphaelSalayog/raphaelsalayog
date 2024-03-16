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
import Projects from "@/components/Projects";

export default function Home() {
  const isFormSubmit = useSelector((store: any) => store.button.isFormSubmit);

  return (
    <>
      <main>
        {isFormSubmit && <ErrorModal />}
        <HamburgerMenu />
        <HomeContent />
        <AboutMe />
        <ExperienceContent />
        <SkillsContent />
        <SchoolContent />
        <Projects />
        <ContactContent />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}
