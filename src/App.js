import React, { useEffect } from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';

import { constants } from './config';
import { FocusTrap } from './helpers/app.helper';
import { getResumeNode } from './services/api';

import About from './components/Main/About'
import Contact from './components/Main/Contact'
import Resume from './components/Main/Resume'
import Stats from './components/Main/Stats'
import Index from './components/Main/Index'

import './static/css/app.css';
import './static/css/main.scss';

const history = createBrowserHistory();
const { ROUTES } = constants;


const App = (props) => {

    const [data, setData] = React.useState({
        openToolbar: false,
        resume: null,
        error: null,
    });

    useEffect(() => {
        if(data.resume == null){
            updateResume();
        }
    }, []);

    const updateResume = async () => {
        const locate = localStorage.getItem('@react-resume/language') || 'en';
        getResumeNode(locate).then(resume => {
            if(resume == null){
                setData({ ...data, error: 'Resume not found at database' });
            } else {
                setData({ ...data, resume });
            }
        });
    } 

    if(data.error){
        return <p><strong>Erro: </strong>{data.error}</p>
    } else if (data.resume == null){
        return <p>Loading resume...</p>
    }

    const indexRoute = (comp, props) => {
        const extra = {updateResume: () => updateResume(), resume: data.resume};
        return React.createElement(comp, {...props, ...extra})
    }
    
    const aboutRoute = (props) => <About resume={data.resume} {...props} />
    const contactRoute = (props) => <Contact resume={data.resume} {...props} />
    const resumeRoute = (props) => <Resume resume={data.resume} {...props} />
    const statsRoute = (props) => <Stats resume={data.resume} {...props} />

    return (
        <div className={classNames('App', {})}>
            <Router history={history} >
                <Switch>
                    {/* <Route exact path={ROUTES.HOME.PATH} component={Index} /> */}
                    <Route exact path={ROUTES.HOME.PATH} component={(props) => indexRoute(Index, props)} />
                    <Route path="/about" component={aboutRoute} />
                    <Route path="/contact" component={contactRoute} />
                    <Route path="/resume" component={resumeRoute} />
                    <Route path="/stats" component={statsRoute} />
                    {/* <Route component={Index} data={data} /> */}
                </Switch>
            </Router>
            <FocusTrap full={props.editorOpen} mobile={props.toolbarOpen} />
        </div>
    );
};

export default App;