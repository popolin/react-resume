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

const Main = ({children, fullPage, toolbarOpen, dispatch}) => {
    console.log("Main");
    console.debug(dispatch);

    return (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | Michel Popolin" defaultTitle="Michel Popolin" />
    <Toolbar dispatch={dispatch}  />

    <div id="wrapper">
      <Header dispatch={dispatch} />
      <div id="main">
        {children}
      </div>
      {fullPage ? null : <Nav />}
    </div>

    
    <CodeEditor />
    <JsonView />
    <SimplesView />

  </>
)
    };



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
    resume: state.resume,

    // children: null,
    // fullPage: false,
});

export default connect(mapStateToProps)(Main);
  

// Main.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
//   fullPage: PropTypes.bool,
// };

// Main.defaultProps = {
//   children: null,
//   fullPage: false,
// };

// export default Main;
