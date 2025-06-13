import { useTranslation } from "react-i18next";
import { projectsData } from "../data/data";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen w-full lg:w-4xl mx-auto mt-4 text-center">
      <h4 className="bg-primary text-primary-foreground rounded text-center py-1 px-2 w-fit m-auto">
        {t("projects")}
      </h4>
      <h2 className="text-2xl md:text-4xl font-bold my-2">
        {t("checkout-my-work")}
      </h2>
      <p className="text-muted-foreground lg:text-base italic max-w-2xl text-center m-auto mb-4">
        {t("projects-description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {projectsData.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
