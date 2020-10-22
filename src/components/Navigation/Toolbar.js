import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';
import { ToolbarHeader } from '.';
import {
  EditorButton,
  FancyButton,
  JsonButton,
  SimplesButton,
} from '../Tools';
import { toggleToolbar } from '../../actions/app.actions';

const Toolbar = ({toolbarOpen, dispatch, resume}) => {
    console.log("Toolbar");
    console.debug(dispatch);
    return(
  <aside>
    <Sidebar
      animation="scale down"
      visible={toolbarOpen}
      width="wide"
      onHide={() => toolbarOpen && dispatch(toggleToolbar())}
      style={{ top: 'auto', overflowX: 'hidden', backgroundColor: '#fcfcfc', paddingBottom: 25 }} >
        <ToolbarHeader />
        <FancyButton />
        <SimplesButton resume={resume} dispatch={dispatch} toolbarOpen={toolbarOpen} />
        <JsonButton dispatch={dispatch} />
        <EditorButton dispatch={dispatch} />
    </Sidebar>
  </aside>
)
};

// Toolbar.defaultProps = {
//   dispatch: () => {},
//   toolbarOpen: false,
//   resume: {},
// };

// Toolbar.propTypes = {
//   dispatch: PropTypes.func,
//   toolbarOpen: PropTypes.bool,
//   resume: PropTypes.shape({}),
// };

// const mapStateToProps = state => ({
//   toolbarOpen: state.app.toolbarOpen,
//   resume: state.resume,
// });

// export default connect(mapStateToProps)(Toolbar);
export default Toolbar;