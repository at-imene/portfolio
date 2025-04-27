import { ProjectCategory, ProjectItemPropsType } from "../types/types";

type EduCardProps = {
  imgSrc: string;
  title: string;
  subTitle: string;
  tailing: string;
  subTailing: string;
  link:string | undefined;
}

type WorkCardProps = {
  imgSrc: string;
  title: string;
  subTitle: string;
  description: string;
  tailing: string;
  subTailing: string;
  skills: string[];
};


 
const currentPage = window.location.origin;

export const workExpData: WorkCardProps[] = [
  {
    imgSrc: "/src/assets/img/logo-hcn.png",
    title: "software-engineer",
    subTitle: "hcn-high-commission-for-digitalization",
    description: "hcn-description",
    tailing: "hcn-timeline",
    subTailing: "hcn-headquarter",
    skills: [
      "Java spring boot",
      "React",
      "Typescript",
      "Postgresql",
      "Docker",
      "Git",
    ],
  },
  {
    imgSrc: "/src/assets/img/logo-kbsystems.jpg",
    title: ".net-full-stack-developer",
    subTitle: "kb-systems",
    description: "kb-systems-description",
    tailing: "kb-systems-timeline",
    subTailing: "kb-systems-headquarter",
    skills: [".Net core", "MAUI", "Blazor", "SQL Server", "Git"],
  },
  {
    imgSrc: "/src/assets/img/logo-fiverr.png",
    title: "android-mobile-developer",
    subTitle: "fiverr",
    description: "fiverr-description",
    tailing: "fiverr-timeline",
    subTailing: "fiverr-headquarter",
    skills: ["Android studio", "Java", "Kotlin", "Jetpack compose", "Firebase"],
  },
  {
    imgSrc: "/src/assets/img/logo-craag.png",
    title: "ml-engineer-intern",
    subTitle: "craag",
    description: "craag-description",
    tailing: "craag-timeline",
    subTailing: "craag-headquarter",
    skills: ["Python", "Tensorflow", "Keras", "Django", "React"],
  },
];

export const educationData: EduCardProps[] = [
  {
    imgSrc: "/src/assets/img/logo-usthb.jpg",
    title: "master-computer-vision",
    subTitle: "usthb",
    link: "https://finfo.usthb.dz/index.php/master-informatique-visuelle/",
    tailing: "miv-timeline",
    subTailing: "usthb-headquarter",
  },
  {
    imgSrc: "/src/assets/img/logo-usthb.jpg",
    title: "bachelor-computer-science",
    subTitle: "usthb",
    link: "https://finfo.usthb.dz/index.php/licence-isil/",
    tailing: "isil-timeline",
    subTailing: "usthb-headquarter",
  },
  {
    imgSrc: "/src/assets/img/logo-ecoin.jpg",
    title: "graphic-design",
    subTitle: "ecoin",
    link: `${currentPage}/design-portfolio.pdf`,
    tailing: "ecoin-timeline",
    subTailing: "ecoin-headquarter",
  },
];

export const FrontendSkills: string[] = ['HTML/CSS', 'React.js', 'Blazor', 'TypeScript', 'Tailwind CSS'];
export const BackendSkills: string[] = ['Java Spring Boot', '.NET Core', 'Django'];
export const DBSkills: string[] = ['PostgreSQL', 'SQL Server', 'Entity Framework', 'JPA/Hibernate'];
export const DevopSkills: string[] = ['Git', 'Docker'];
export const MobileSkills: string[] = ['Android Studio', 'Jetpack Compose', 'Flutter'];


export const projectsData : ProjectItemPropsType[] = [
  {
    title: "raven-news-app",
    imgSrc: ["/src/assets/projects/news-app/news-cover.png","/src/assets/projects/news-app/news-app.PNG"],
    shortDescription: "news-app-description",
    githubLink: "https://github.com/at-imene/NewsApp",
    demoLink: undefined,
    skills:["Flutter", "Dart"],
    timeline: "news-app-timeline",
    category: ProjectCategory.Mobile
  },
  {
    title: "pharma-title",
    imgSrc: ["/src/assets/projects/pharma/pharma.PNG",],
    shortDescription: 'pharma-app-description',
    skills:["Spring boot", "Reactjs", "Postgresql", "Git", "Docker"],
    demoLink: "https://snvaam.hcn.dz/login",
    githubLink:undefined,
    timeline: "pharma-timeline",
    category: ProjectCategory.Web
  },
  {
    title: "sunspot-app-title",
    imgSrc: ["/src/assets/projects/sun/sunspot-classification.jpg", "/src/assets/projects/sun/sunspot-detection.jpg"],
    shortDescription: 'sunspot-app-description',
    skills:["Tensorflow", "Keras", "Django", "React", "Web scraping"],
    githubLink: "https://github.com/at-imene/Sunspoty",
    demoLink:undefined,
    timeline: "sunspot-timeline",
    category: ProjectCategory.Web
  },
  {
    title: "moviz-app",
    imgSrc: ["/src/assets/projects/moviz/moviz-cover.png"],
    shortDescription: 'movies-app-description',
    skills:["Android studio", "Kotlin", "Jetpack compose"],
    githubLink: "https://github.com/at-imene/Movizy",
    demoLink:undefined,
    timeline: "moviz-timeline",
    category: ProjectCategory.Mobile
  },

]

