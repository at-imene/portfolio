import { educationData } from "../data/data";
import WorkExperienceItem from "../components/WorkExperienceItem";
import { Trans, useTranslation } from "react-i18next";
import ExperienceSection from '../sections/ExperienceSection'
import EducationSection from "../sections/EducationSection";
import AboutmeSection from "../sections/AboutmeSection";
import SkillsSection from "../sections/SkillsSection";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Home() {
  const { t } = useTranslation();
  const name = "Imene";

  return (
    <div className="max-w-screen w-sm sm:px-0 md:min-w-3xl lg:min-w-4xl mx-auto space-y-8  space-b-24 mt-20 mb-40">
      <main className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between text-center md:text-left ">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-5xl font-black">
            {t("welcome-iam", { name })} 👋
          </h3>
          <p className="text-lg md:text-2xl mt-2">
            <Trans i18nKey="about-me-short-description">
              I'm a Software Engineer driven by a passion for turning <br />
              complex ideas into practical, impactful digital experiences.
            </Trans>
          </p>
        </div>
        <img
          src="/src/assets/img/me-pic.webp"
          alt="profile picture"
          className="block rounded-full size-28 md:size-36 object-cover"
        />
      </main>

      <AboutmeSection />

      <ExperienceSection />

      <EducationSection />

      <SkillsSection />

      <Projects />

      <ContactMe />
      
    </div>
  );
}

export default Home;
