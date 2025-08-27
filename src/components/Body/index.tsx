import React from 'react';
import { Helmet } from 'react-helmet';
import Analytics from '../Main/Template/Analytics';
import Header from '../Main/Template/Header';
import Nav from '../Main/Template/Nav';
import ScrollToTop from '../Main/Template/ScrollToTop';

export interface IContact {
  label: string;
  link: string;
}
export interface IDegree {
  degree: string;
  school: string;
  link?: string;
  begin: string;
  end: string;
}
export interface ISkill {
  category: string[];
  competency: string;
  title: string;
}
export interface ICategory {
  name: string;
  color: string;
}
export interface IPosition {
  begin: string;
  end?: string;
  company: string;
  link?: string;
  position: string;
  points: string[];
}
export interface ICourse {
  title: string;
  school: string;
  candidate: string;
  begin: string;
  duration: string;
}
export interface ICertification {
  shortName?: string;
  from?: string;
  // title: string;
  tests: {
    shortName: string;
    title?: string;
  }[];
}
export interface IResume {
  header: {
    name: string;
    shortName: string;
    email: string;
    city: string;
    country: string;
    birthdate: string;
    photo: string;
  };
  contacts: IContact[];
  countries: {
    total: string;
    map: string;
  };
  degrees: IDegree[];
  skills: ISkill[];
  positions: IPosition[];
  courses: ICourse[];
  certifications: ICertification[];
}

interface MainProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
  // eslint-disable-next-line react/require-default-props
  full?: boolean;
}

const Body: React.FC<MainProps> = ({
  children,
  resume,
  updateResume,
  full = false,
}) => {
  return (
    <>
      <Analytics />
      <ScrollToTop />
      <Helmet
        titleTemplate={`%s | ${resume.header.shortName}`}
        defaultTitle={resume.header.shortName}
      />

      <div id="wrapper">
        <Header resume={resume} updateResume={updateResume} />
        <div id="main">{children}</div>
        {!full && <Nav resume={resume} />}
      </div>
    </>
  );
};

export default Body;
