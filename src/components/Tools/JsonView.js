/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar, Segment } from 'semantic-ui-react';
import AceEditor from 'react-ace';
import { SidebarCloseButton } from '../Navigation';
import {
    toggleJson,
  updateResume,
  updateResumeEditorStatus,
} from '../../actions/app.actions';
import { isValidJSON } from '../../helpers/resume.helper';
import { EDITOR_STATUS, getStatusColor } from '../../helpers/tools.helper';

import 'brace/mode/json';
import 'brace/theme/tomorrow_night_bright';
import 'brace/theme/tomorrow';
import 'brace/ext/language_tools';

class JsonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: JSON.stringify(props.resume, null, '\t'),
    };
    this.onResumeChange = this.onResumeChange.bind(this);
  }

  componentDidUpdate() {
    const { editorValue } = this.state;
    const { resume, jsonOpen } = this.props;
    const resumeValue = JSON.stringify(resume, null, '\t');
    if (!jsonOpen && editorValue !== resumeValue) {
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
      jsonOpen,
      dispatch,
      statusMessage,
    } = this.props;
    const { editorValue } = this.state;
    const statusColor = getStatusColor(statusMessage);
    return (
      <Sidebar
        animation="scale down"
        visible={jsonOpen}
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
          title="Conteúdo JSON"
          titleIcon="js"
          statusMessage="O conteúdo do currículo é alimentado a partir destes dados"
          statusMessageColor={statusColor}
          closeToolbar={() => dispatch(toggleJson())}
          toolbarOpen={jsonOpen}
          backgroundColor={'#fff'}
        />
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
            <AceEditor
              mode="json"
              theme={'tomorrow'}
              name="json-resume-editor"
              value={editorValue}
              readOnly={true}
              showLineNumber
              showPrintMargin={false}
              tabSize={3}
            />
          </Segment>
        </div>
      </Sidebar>
    );
  }
}

JsonView.defaultProps = {
  dispatch: () => {},
  jsonOpen: false,
  resume: {},
};

JsonView.propTypes = {
  dispatch: PropTypes.func,
  jsonOpen: PropTypes.bool,
  resume: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  jsonOpen: state.app.jsonOpen,
  resume: state.resume,
});

export default connect(mapStateToProps)(JsonView);
