type WorkCardProps = {
    imgSrc: string
    title: string
    subTitle: string
    description: string
    tailing: string
    subTailing: string,
    skills: Array[string] 
}

export const workExpData: WorkCardProps[] = [
    {
      imgSrc: '/src/assets/img/logo-hcn.png',
      title: 'software-engineer',
      subTitle: 'hcn-high-commission-for-digitalization',
      description: 'hcn-description',
      tailing: 'hcn-timeline',
      subTailing: 'hcn-headquarter',
      skills: ['Java spring boot', 'React', 'Typescript', 'Postgresql', 'Docker', 'Git']
    },
    {
      imgSrc: '/src/assets/img/logo-kbsystems.jpg',
      title: '.net-full-stack-developer',
      subTitle: 'kb-systems',
      description: 'kb-systems-description',
      tailing: 'kb-systems-timeline',
      subTailing: 'kb-systems-headquarter',
      skills:[".Net core", "MAUI", 'Blazor', 'SQL Server', 'Git']
    },
    {
      imgSrc: '/src/assets/img/logo-fiverr.png',
      title: 'android-mobile-developer',
      subTitle: 'fiverr',
      description: 'fiverr-description',
      tailing: 'fiverr-timeline',
      subTailing: 'fiverr-headquarter',
      skills:['Android studio', 'Java', 'Kotlin', 'Jetpack compose', 'Firebase']
    },
    {
      imgSrc: '/src/assets/img/logo-craag.png',
      title: 'ml-engineer-intern',
      subTitle: 'craag',
      description: 'craag-description',
      tailing: 'craag-timeline',
      subTailing: 'craag-headquarter',
      skills: ['Python', 'Tensorflow', 'Keras','Django', 'React']
    },
    
  ];
  