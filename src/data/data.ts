type WorkCardProps = {
  imgSrc: string;
  title: string;
  subTitle: string;
  description: string;
  tailing: string;
  subTailing: string;
  skills: string[] | undefined;
  link:string | undefined;
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

export const educationData: WorkCardProps[] = [
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

