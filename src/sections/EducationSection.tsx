import { useTranslation } from 'react-i18next'
import WorkExperienceItem from '../components/WorkExperienceItem'
import { educationData } from '../data/data'

function EducationSection() {
    const {t} = useTranslation()
  return (
    <section>
        <h3 className="text-xl font-bold mb-3">{t('education')}</h3>
        {educationData.map((item, index) => (
          <WorkExperienceItem
            key={index}
            imgSrc={item.imgSrc}
            title={t(item.title)}
            subTitle={t(item.subTitle)}
            tailing={t(item.tailing)}
            subTailing={t(item.subTailing)}
            link={item.link}
            isOpen={false}
            toggle={()=>{}}
          />
        ))}
      </section>
  )
}

export default EducationSection