import React from 'react';
import AceEditor from 'react-ace';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { Helmet } from 'react-helmet';

import Main from './Main';

const Json = ({resume, updateResume}) => {

    const {t} = useTranslation('edit');
    const [editorValue, setEditorValue] = React.useState(JSON.stringify(resume, null, '\t'));

    return(
        <Main resume={resume} updateResume={updateResume} full={true}>
            <Helmet title={t('json.title')} />
            
            <article className="post" id="about">
                <header>
                    <div className="title">
                        <h2>
                            <Link to="/simple">{t('json.title')}</Link>
                        </h2>
                        <p>{t('json.description')}</p>
                    </div>
                </header>
                
      
                <AceEditor
                    mode="json"
                    width='100%'
                    theme={'tomorrow'}
                    name="json-resume-editor"
                    value={editorValue}
                    readOnly={true}
                    showLineNumber
                    showPrintMargin={false}
                    tabSize={3}
                    />

            </article>
            
        </Main>
    )
};

export default Json;
