import React from 'react';
import { Sidebar } from 'semantic-ui-react';
import { ToolbarHeader } from '.';
import {
  EditorButton,
  JsonButton,
  SimplesButton,
} from '../Tools';
import { toggleToolbar } from '../../actions/app.actions';

const Toolbar = ({toolbarOpen, dispatch, resume}) => (
  <aside>
    <Sidebar
      animation="scale down"
      visible={toolbarOpen}
      width="wide"
      onHide={() => toolbarOpen && dispatch(toggleToolbar())}
      style={{ top: 'auto', overflowX: 'hidden', backgroundColor: '#fcfcfc', paddingBottom: 25 }} >
        <ToolbarHeader />
        <SimplesButton resume={resume} dispatch={dispatch} toolbarOpen={toolbarOpen} />
        <JsonButton dispatch={dispatch} />
        <EditorButton dispatch={dispatch} />
    </Sidebar>
  </aside>
);

export default Toolbar;