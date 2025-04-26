import React, { useState } from "react";
import { ProjectItemPropsType } from "../types/types";
import { Github, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProjectCard: React.FC<ProjectItemPropsType> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const {
    title,
    imgSrc,
    shortDescription,
    skills,
    timeline,
    githubLink,
    demoLink,
  } = data;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-sm shadow-sm dark:shadow-gray-400/50">
     <div className="h-60 bg-red-100 rounded-sm relative overflow-hidden">
  {imgSrc.length > 1 ? (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="h-full"
    >
      <CarouselContent className="h-full" style={{ height: "100%" }}>
        {imgSrc.map((img, index) => (
          <CarouselItem key={index} className="h-full">
            <img
              src={img}
              alt={`image number ${index}`}
              className="h-full w-full object-cover rounded-t-sm"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {imgSrc.map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 bg-gray-700 rounded-full opacity-50 hover:opacity-100 transition"
          />
        ))}
      </div>
    </Carousel>
  ) : (
    <img
      src={imgSrc[0]}
      alt="project img"
      className="h-full w-full object-cover rounded-t-sm"
    />
  )}
</div>


      <div className="text-left m-3">
        <h3 className="text-lg font-semibold uppercase">{t(title)}</h3>
        <p className="text-sm my-2 font-base">{t(timeline)}</p>

        <div className="h-full flex flex-col justify-around items-start">
          <div>
            <p
              className={`text-muted-foreground text-sm ${
                isExpanded ? "" : "line-clamp-3"
              }`}
            >
              {t(shortDescription)}
            </p>

            {t(shortDescription).length > 120 && (
              <button
                onClick={toggleDescription}
                className="text-xs text-blue-600 hover:underline mt-1"
              >
                {isExpanded ? "View less" : "View more"}
              </button>
            )}
          </div>
          <div>
            <div className="mt-2">
              {skills.map((s, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-2 px-2 py-1 bg-secondary text-secondary-foreground rounded-sm my-2 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {githubLink && (
              <div
                className="mt-2 w-fit bg-primary text-primary-foreground cursor-pointer hover:bg-primary/80 rounded-sm py-1 px-2 flex items-center gap-2"
                onClick={() => openInNewTab(githubLink)}
              >
                <Github className="size-3" />
                <span className="text-sm font-medium">Github</span>
              </div>
            )}

            {demoLink && (
              <div
                className="mt-2 w-fit bg-primary text-primary-foreground cursor-pointer hover:bg-primary/80 rounded-sm py-1 px-2 flex items-center gap-2"
                onClick={() => openInNewTab(demoLink)}
              >
                <Globe className="size-3" />
                <span className="text-sm font-medium">Website</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
