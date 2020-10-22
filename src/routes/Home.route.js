import React from 'react';

import {
  CodeEditor,
  JsonView,
  SimplesView,
  TopNavigation,
  Toolbar,
} from '../components';
import Index from '../components/Main/Index'


const Home = () => (
  <>
    <Index />
    <Toolbar />
    <CodeEditor />
    <JsonView />
    <SimplesView />
  </>
);

Home.defaultProps = {
};

Home.propTypes = {
};

export default Home;
