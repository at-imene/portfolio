import React, { useState } from "react";
import { workExpData } from "../data/workExpData";
import WorkExperienceItem from "../components/WorkExperienceItem";
import { Trans, useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const name = "Imene";
  const [openItems, setOpenItems] = useState<boolean[]>(
    Array(workExpData.length).fill(false)
  );
  const [showAll, setShowAll] = useState(false);

  const toggleDetails = () => {
    setOpenItems(Array(openItems.length).fill(!showAll));
    setShowAll(!showAll);
  };

  const toggleOpenItem = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !openItems[index];
    setOpenItems(newOpenItems);
  };
  return (
    <div className="max-w-screen w-sm sm:px-0 md:min-w-3xl lg:min-w-4xl mx-auto space-y-8  space-b-24">
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

      <section>
        <h3 className="text-xl sm:text-xl font-bold mb-3">{t("about-me")}</h3>
        <p className="prose max-w-full text-pretty text-md text-muted-foreground dark:prose-invert">
          <Trans i18nKey="about-me-description">
            I’m a Software Engineer with a multidisciplinary background spanning
            mobile development, ERP systems, and public sector digital
            transformation.
            <br />
            <br />
            My academic focus on computer vision introduced me to the
            fundamentals of AI and data science, shaping my interest in
            practical, user-driven solutions.
            <br />
            <br />
            I started my career as a freelance Android developer, then worked as
            a Full Stack Developer building ERP solutions. Currently, I’m part
            of the High Commission for Digitalization in Algeria, where I
            develop secure, scalable systems that modernize public services and
            support e-governance.
            <br />
            <br />
            I’m passionate about applying emerging technologies to build
            meaningful, efficient software—always learning and adaptable to new
            tools and programming environments.
          </Trans>
        </p>
      </section>

      <section>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold">Work Experience</h3>
          <p
            onClick={toggleDetails}
            className="text-xs  hover:bg-foreground hover:text-primary-foreground py-1 px-2 border-2  rounded-sm cursor-pointer"
          >
           {!showAll? t('show-all'): t('hide-all')}
          </p>
        </div>
        {workExpData.map((item, index) => (
          <WorkExperienceItem
            key={index}
            imgSrc={item.imgSrc}
            title={t(item.title)}
            subTitle={t(item.subTitle)}
            description={t(item.description)}
            tailing={t(item.tailing)}
            subTailing={t(item.subTailing)}
            skills={item.skills}
            isOpen={openItems[index]}
            toggle={()=> toggleOpenItem(index)}
          />
        ))}
      </section>

      <section>
        <h3 className="text-xl font-bold mb-3">Education</h3>
      </section>
    </div>
  );
}

export default Home;
