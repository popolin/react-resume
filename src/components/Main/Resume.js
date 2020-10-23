import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {useTranslation} from "react-i18next";

import Main from './Main';

import Education from './Resume/Education';
import Experience from './Resume/Experience';
import Skills from './Resume/Skills';
import Courses from './Resume/Courses';
import References from './Resume/References';

import courses from './data/resume/courses';
import degrees from './data/resume/degrees';
import positions from './data/resume/positions';
import { skills, categories } from './data/resume/skills';

const sections = [
  'resume.section.education',
  'resume.section.experience',
  'resume.section.skills',
  'resume.section.courses',
  'resume.section.references',
];

const Resume = ({resume}) => {
    const {t} = useTranslation('main');

    return (
        <Main resume={resume}>
            <Helmet title={t('resume.title')} />
            <article className="post" id="resume">
            <header>
                <div className="title">
                <h2><Link to="resume">{t('resume.title')}</Link></h2>
                <div className="link-container">
                    {sections.map((sec) => (
                    <h4 key={sec}>
                        <a href={`#${sec}`}>{t(sec)}</a>
                    </h4>))}
                </div>

                </div>
            </header>
            <Education data={degrees} />
            <Experience data={positions} />
            <Skills skills={skills} categories={categories} />
            <Courses data={courses} />
            <References />

            </article>
        </Main>
    )   
};

export default Resume;
