import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PDFViewer } from '@react-pdf/renderer';
import { Output as SimplePDF } from '../../components/Simple';
import Body, { IResume } from '../../components/Body';

interface SimpleProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
}

const Simple: React.FC<SimpleProps> = ({ resume, updateResume }) => {
  const { t } = useTranslation(['edit', 'main']);

  return (
    <Body resume={resume} updateResume={updateResume} full>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/simple">{t('edit:simple.title')}</Link>
            </h2>
            <div style={{ display: 'inline' }} className="json-resume-tool">
              <p style={{ float: 'left' }}>{t('edit:simple.description')}</p>
            </div>
          </div>
        </header>
        <div style={{}}>
          <PDFViewer style={{ width: '100%', minHeight: 800 }}>
            <SimplePDF resume={resume} t={t} />
          </PDFViewer>
        </div>
      </article>
    </Body>
  );
};

export default Simple;
