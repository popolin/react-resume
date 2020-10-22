/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar, Segment } from 'semantic-ui-react';
import { SidebarCloseButton } from '../Navigation';
import {
    toggleSimples,
  updateResume,
  updateResumeEditorStatus,
} from '../../actions/app.actions';
import { isValidJSON } from '../../helpers/resume.helper';
import { EDITOR_STATUS, getStatusColor } from '../../helpers/tools.helper';

import Resume from '../../components/Resume';

class SimplesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: JSON.stringify(props.resume, null, '\t'),
    };
    this.onResumeChange = this.onResumeChange.bind(this);
  }

  componentDidUpdate() {
    const { editorValue } = this.state;
    const { resume, simplesOpen } = this.props;
    const resumeValue = JSON.stringify(resume, null, '\t');
    if (!simplesOpen && editorValue !== resumeValue) {
      // eslint-disable-next-line
      this.setState({ editorValue: resumeValue });
    }
  }

  onResumeChange(data) {
    const { dispatch, autoSave } = this.props;
    this.setState({
      editorValue: data,
    });
    dispatch(updateResumeEditorStatus(EDITOR_STATUS.VALIDATING));
    const updatedResume = isValidJSON(data);
    if (updatedResume) {
      dispatch(updateResume(updatedResume, autoSave));
      dispatch(updateResumeEditorStatus(EDITOR_STATUS.UPDATED));
      return;
    }
    dispatch(updateResumeEditorStatus(EDITOR_STATUS.ERROR));
  }

  render() {
    const {
      simplesOpen,
      dispatch,
      statusMessage,
    } = this.props;
    const statusColor = getStatusColor(statusMessage);
    return (
      <Sidebar
        animation="scale down"
        visible={simplesOpen}
        direction="right"
        width="very wide"
        style={{
          width: '100vw',
          maxWidth: '100vw',
          maxHeight: '100vh',
          overflowX: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        <SidebarCloseButton
          title="Versão Simples"
          titleIcon="file"
          click
          statusMessageColor={statusColor}
          closeToolbar={() => dispatch(toggleSimples())}
          toolbarOpen={simplesOpen}
          backgroundColor={'#fff'}
        >teste</SidebarCloseButton>
        <div
          style={{
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 20,
            height: '92%',
            overflowX: 'hidden',
          }}
        >
          <Segment
            style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}
            color={statusColor}
          >
          <Resume />
          </Segment>
        </div>
      </Sidebar>
    );
  }
}

SimplesView.defaultProps = {
  dispatch: () => {},
  simplesOpen: false,
  resume: {},
};

SimplesView.propTypes = {
  dispatch: PropTypes.func,
  simplesOpen: PropTypes.bool,
  resume: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  simplesOpen: state.app.simplesOpen,
    // simplesOpen: true,
  resume: state.resume,
});

export default connect(mapStateToProps)(SimplesView);
