import React from 'react';
import { Helmet } from 'react-helmet';

import Analytics from './Template/Analytics';
import Header from './Template/Header';
import Nav from './Template/Nav';
import ScrollToTop from './Template/ScrollToTop';

const Main = ({children, resume, updateResume, toolbarOpen, full}) => (
    <>
        <Analytics />
        <ScrollToTop />
        <Helmet titleTemplate={`%s | ${resume.header.shortName}`} defaultTitle={resume.header.shortName} />

        <div id="wrapper">
            <Header toolbarOpen={toolbarOpen} resume={resume} updateResume={updateResume} />
            <div id="main">
                {children}
            </div>
            {!full && (
                <Nav resume={resume} />
            )}
        </div>
        
    </>
);

export default Main;
  
