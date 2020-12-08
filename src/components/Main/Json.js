import React from 'react';
import AceEditor from 'react-ace';
import { Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'brace/mode/hjson';
import 'brace/theme/gruvbox';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

import Main from './Main';

toast.configure({
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  closeButton: false,
  rtl: false,
  pauseOnVisibilityChange: true,
  draggable: true,
  pauseOnHover: true,
  progressStyle: {
    background: 'lightgray',
  },
  bodyClassName: 'resume-toast-body',
});


const Json = ({ resume, updateResume }) => {
  const { t } = useTranslation('edit');
  const [editorValue, setEditorValue] = React.useState(JSON.stringify(resume, null, '\t'));

  return (
    <Main resume={resume} updateResume={updateResume} full>
      <Helmet title={t('json.title')} />

      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/json">{t('json.title')}</Link>
            </h2>
            <div style={{ display: 'inline' }} className="json-resume-tool">
              <p style={{ float: 'left' }}>{t('json.description')}</p>
              <Button
                animated
                fluid
                onClick={() => { toast(`❌ Ops... ${t('json.notMe')}`); }}
                style={{
                  float: 'right',
                  width: 200,
                  height: 50,
                  backgroundColor: '#fff',
                  borderColor: '#fff',
                  fontSize: 12,
                }}
              >
                <Button.Content visible style={{ color: '#646464' }}>
                  <FontAwesomeIcon icon={faSave} />
                  {'  '}
                  {t('json.saveChanges')}
                </Button.Content>
                <Button.Content hidden style={{ color: '#646464', backgroundColor: '' }}>
                  {t('json.save')}
                  {'  '}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button.Content>
              </Button>
            </div>
          </div>
        </header>


        <AceEditor
          mode="json"
          width="100%"
          theme="gruvbox"
          mode="hjson"
          name="json-resume-editor"
          value={editorValue}
          showLineNumber
          showPrintMargin={false}
          scrollMargin={[10, 10]}
          tabSize={3}
        />

      </article>

    </Main>
  );
};

export default Json;
