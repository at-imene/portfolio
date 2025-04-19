import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WorkExperienceItemProps {
  imgSrc: string;
  title: string;
  subTitle: string;
  tailing: string;
  subTailing: string;
  description: string;
  skills: Array[string];
  isOpen: boolean;
  toggle: ()=> void;
  link: string | undefined;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  imgSrc,
  title,
  subTitle,
  tailing,
  subTailing,
  description,
  skills, 
  isOpen,
  toggle, link
}) => {

  return (
    <div
      onClick={()=> {
        if(toggle){
          toggle()
        }
        if(link){
          window.open(link, "_blank");
        }
      }}
      className="cursor-pointer dark:border-gray-700 space-y-4 group"
    >
      <div className="flex justify-between gap-3">
        <img src={imgSrc} alt={title} className="w-14 h-14 object-cover rounded-full border" />
        <div className="flex-grow">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <h3 className="text-base font-semibold capitalize">{title}</h3>
                <div className="ml-1 text-gray-500 transform translate-x-0 group-hover:translate-x-1 transition-transform ease-in-oout duration-300">
                   <ChevronUp size={16} className={`hidden group-hover:block transition-rotation duration-500 ease-in-out ${isOpen? 'rotate-180': 'rotate-90'}`}/>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {subTitle}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">{tailing}</div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {subTailing}
              </p>
            </div>
          </div>
          <div
            className={`my-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? " opacity-100 max-h-40" : " opacity-0 max-h-0"
            }`}
          >
            {description}
           <div className="flex gap-2 mt-2">
           {skills && skills.map(skill=>(
              <p className="py-1 px-2 bg-gray-800 text-primary-foreground text-xs rounded-sm">{skill}</p>
            ))}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
