import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Analytics from './Template/Analytics';
import Header from './Template/Header';
import Nav from './Template/Nav';
import ScrollToTop from './Template/ScrollToTop';

import {
    CodeEditor,
    JsonView,
    SimplesView,
    Toolbar,
  } from '../../components';

const Main = ({children, resume, updateResume, toolbarOpen, dispatch}) => (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate={`%s | ${resume.header.shortName}`} defaultTitle={resume.header.shortName} />
    <Toolbar toolbarOpen={toolbarOpen} dispatch={dispatch}  />

    <div id="wrapper">
      <Header toolbarOpen={toolbarOpen} dispatch={dispatch} resume={resume} updateResume={updateResume} />
      <div id="main">
        {children}
      </div>
      <Nav resume={resume} />
    </div>

    
    <CodeEditor />
    <JsonView />
    <SimplesView />

  </>
);



Main.defaultProps = {
    dispatch: () => {},
    toolbarOpen: false,

    children: null,
    fullPage: false,
  };
  
Main.propTypes = {
    dispatch: PropTypes.func,
    toolbarOpen: PropTypes.bool,

    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
};

const mapStateToProps = state => ({
    toolbarOpen: state.app.toolbarOpen,
});

export default connect(mapStateToProps)(Main);
  
