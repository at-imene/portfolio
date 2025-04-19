import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { workExpData } from '../data/data';
import WorkExperienceItem from '../components/WorkExperienceItem';

function ExperienceSection() {
      const { t } = useTranslation();
      const [openItems, setOpenItems] = useState<Boolean[]>(
        Array(workExpData.length).fill(false)
      );
      const [showAll, setShowAll] = useState(false);
    
      const toggleDetails = () => {
        setOpenItems(Array(openItems.length).fill(!showAll));
        setShowAll(!showAll);
      };
    
      const toggleOpenItem = (index: number) => {
        const newOpenItems = [...openItems];
        newOpenItems[index] = !openItems[index];
        setOpenItems(newOpenItems);
      };
  return (
    <section>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold capitalize">{t("work-experience")}</h3>
          <p
            onClick={toggleDetails}
            className="text-xs  hover:bg-foreground hover:text-primary-foreground py-1 px-2 border-2  rounded-sm cursor-pointer"
          >
           {!showAll? t('show-all'): t('hide-all')}
          </p>
        </div>
        {workExpData.map((item, index) => (
          <WorkExperienceItem
            key={index}
            imgSrc={item.imgSrc}
            title={t(item.title)}
            subTitle={t(item.subTitle)}
            description={t(item.description)}
            tailing={t(item.tailing)}
            subTailing={t(item.subTailing)}
            skills={item.skills}
            isOpen={openItems[index]}
            toggle={()=> toggleOpenItem(index)}
          />
        ))}
      </section>
  )
}

export default ExperienceSection