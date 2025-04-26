export enum ProjectCategory {
  Mobile, Web
}

export type ProjectItemPropsType = {
  title:string;
  imgSrc:string[];
  shortDescription: string;
  githubLink: string | undefined;
  demoLink:string | undefined;
  skills: string[];
  timeline: string;
  category: ProjectCategory;
}