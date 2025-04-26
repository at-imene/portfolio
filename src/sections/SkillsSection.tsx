import { useTranslation } from "react-i18next";
import {
  BackendSkills,
  DBSkills,
  DevopSkills,
  FrontendSkills,
  MobileSkills,
} from "../data/data";

type SkillTagProps = {
  tagname: string;
};

const SkillTag = ({ tagname }: SkillTagProps) => {
  return (
    <p className="bg-primary text-primary-foreground text-xs md:text-sm rounded-sm py-1 px-2">
      {tagname}
    </p>
  );
};

function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section className="max-w-full ">
      <h3 className="text-xl font-bold mb-3">{t("Skills")}</h3>
      <div className="w-full">
        <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
          <h4 className="font-base mr-4 group-hover:font-semibold ">
            Backend{" "}
          </h4>
          <div className="flex gap-2 flex-wrap">
            {BackendSkills.map((s) => (
              <SkillTag tagname={s} />
            ))}
          </div>
        </div>
        <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
          <h4 className="font-base mr-4">Frontend </h4>
          <div className="flex gap-2 flex-wrap">
            {FrontendSkills.map((s) => (
              <SkillTag tagname={s} />
            ))}
          </div>
        </div>
        <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
          <h4 className="font-base mr-4">Databases & ORMs</h4>
          <div className="flex gap-2 flex-wrap">
            {DBSkills.map((s) => (
              <SkillTag tagname={s} />
            ))}
          </div>
        </div>
        <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
          <h4 className="font-base mr-4">Mobile </h4>
          <div className="flex gap-2 flex-wrap">
            {MobileSkills.map((s) => (
              <SkillTag tagname={s} />
            ))}
          </div>
        </div>
        <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
          <h4 className="font-base mr-4">Devops </h4>
          <div className="flex gap-2 flex-wrap">
            {DevopSkills.map((s) => (
              <SkillTag tagname={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
