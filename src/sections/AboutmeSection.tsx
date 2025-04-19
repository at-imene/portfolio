import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

function AboutmeSection() {
    const {t} = useTranslation()
  return (
    <section>
        <h3 className="text-xl sm:text-xl font-bold mb-3">{t("about-me")}</h3>
        <p className="prose max-w-full text-pretty text-md text-muted-foreground dark:prose-invert">
          <Trans i18nKey="about-me-description">
            I’m a Software Engineer with a multidisciplinary background spanning
            mobile development, ERP systems, and public sector digital
            transformation.
            <br />
            <br />
            My academic focus on computer vision introduced me to the
            fundamentals of AI and data science, shaping my interest in
            practical, user-driven solutions.
            <br />
            <br />
            I started my career as a freelance Android developer, then worked as
            a Full Stack Developer building ERP solutions. Currently, I’m part
            of the High Commission for Digitalization in Algeria, where I
            develop secure, scalable systems that modernize public services and
            support e-governance.
            <br />
            <br />
            I’m passionate about applying emerging technologies to build
            meaningful, efficient software—always learning and adaptable to new
            tools and programming environments.
          </Trans>
        </p>
      </section>
  )
}

export default AboutmeSection