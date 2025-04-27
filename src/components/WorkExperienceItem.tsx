import React from "react";
import { ChevronUp } from "lucide-react";

interface WorkExperienceItemProps {
  imgSrc: string;
  title: string;
  subTitle: string;
  tailing: string;
  subTailing: string;
  description?: string; // optional now ✅
  skills?: string[];     // optional now ✅
  isOpen: boolean;
  toggle: () => void;
  link?: string;      
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  imgSrc,
  title,
  subTitle,
  tailing,
  subTailing,
  description,
  skills,
  isOpen = false,
  toggle,
  link
}) => {
  return (
    <div
      onClick={() => {
        if (toggle) {
          toggle();
        }
        if (link) {
          window.open(link, "_blank");
        }
      }}
      className="cursor-pointer dark:border-gray-700 space-y-4 group"
    >
      <div className="flex justify-between gap-3">
        <img
          src={imgSrc}
          alt={title}
          className="w-14 h-14 object-cover rounded-full border bg-primary"
        />
        <div className="flex-grow overflow-hidden">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <h3 className="text-sm md:text-base font-semibold capitalize">
                  {title}
                </h3>
                <div className="ml-1 text-gray-500 transform translate-x-0 group-hover:translate-x-1 transition-transform ease-in-oout duration-300">
                  <ChevronUp
                    size={16}
                    className={`hidden group-hover:block transition-rotation duration-500 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-90"
                    }`}
                  />
                </div>
              </div>
              <p className="text-xs md:text-sm text-primary capitalize">
                {subTitle}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs md:text-sm text-muted-foreground">
                {tailing}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {subTailing}
              </p>
            </div>
          </div>
          <div
            className={`my-3 text-sm text-muted-foreground transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? " opacity-100 max-h-40" : " opacity-0 max-h-0"
            }`}
          >
            {description}
            <div className="flex gap-2 mt-2">
              {skills &&
                skills.map((skill) => (
                  <p className="py-1 px-2 bg-secondary text-xs rounded-sm">
                    {skill}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
