/* eslint-disable import/no-extraneous-dependencies */
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
import { FaSave, FaArrowRight } from 'react-icons/fa';
import Body, { IResume } from '../../components/Body';

toast.configure({
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  closeButton: false,
  rtl: false,
  draggable: true,
  pauseOnHover: true,
  progressStyle: {
    background: 'lightgray',
  },
  bodyClassName: 'resume-toast-body',
});

interface JsonProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
}

const Json: React.FC<JsonProps> = ({ resume, updateResume }) => {
  const { t } = useTranslation('edit');

  const editorValue = JSON.stringify(resume, null, '\t');

  return (
    <Body resume={resume} updateResume={updateResume} full>
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
                onClick={() => {
                  toast(`❌ Ops... ${t('json.notMe')}`);
                }}
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
                  <FaSave />
                  {'  '}
                  {t('json.saveChanges')}
                </Button.Content>
                <Button.Content
                  hidden
                  style={{ color: '#646464', backgroundColor: '' }}
                >
                  {t('json.save')}
                  {'  '}
                  <FaArrowRight />
                </Button.Content>
              </Button>
            </div>
          </div>
        </header>

        <AceEditor
          width="100%"
          theme="gruvbox"
          mode="hjson"
          name="json-resume-editor"
          value={editorValue}
          showGutter
          showPrintMargin={false}
          scrollMargin={[10, 10]}
          tabSize={3}
        />
      </article>
    </Body>
  );
};

export default Json;
