import React from "react";
import { useTranslation } from "react-i18next";
import {
  BackendSkills,
  DBSkills,
  DevopSkills,
  FrontendSkills,
  MobileSkills,
} from "../data/data";

function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section>
      <h3 className="text-xl font-bold mb-3">{t("Skills")}</h3>
      <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
        <h4 className="font-base mr-4 group-hover:font-semibold ">Backend </h4>
        <div className="flex gap-2">
          {BackendSkills.map((s) => (
            <p className="bg-primary text-primary-foreground text-sm rounded-sm py-1 px-2">
              {s}
            </p>
          ))}
        </div>
      </div>
      <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
        <h4 className="font-base mr-4">Frontend </h4>
        <div className="flex gap-2">
          {FrontendSkills.map((s) => (
            <p className="bg-primary text-primary-foreground text-sm rounded-sm py-1 px-2">
              {s}
            </p>
          ))}
        </div>
      </div>
      <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
        <h4 className="font-base mr-4">Databases & ORMs</h4>
        <div className="flex gap-2">
          {DBSkills.map((s) => (
            <p className="bg-primary text-primary-foreground text-sm rounded-sm py-1 px-2">
              {s}
            </p>
          ))}
        </div>
      </div>
      <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
        <h4 className="font-base mr-4">Mobile </h4>
        <div className="flex gap-2">
          {MobileSkills.map((s) => (
            <p className="bg-primary text-primary-foreground text-sm rounded-sm py-1 px-2">
              {s}
            </p>
          ))}
        </div>
      </div>
      <div className="flex mb-2 border-l-2 border-primary pl-2 hover:translate-x-2 ease-in-out duration-300 hover:border-l-3 rounded-xs">
        <h4 className="font-base mr-4">Devops </h4>
        <div className="flex gap-2">
          {DevopSkills.map((s) => (
            <p className="bg-primary text-primary-foreground text-sm rounded-sm py-1 px-2">
              {s}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
