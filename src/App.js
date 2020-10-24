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
import LoadingSpinner from './components/Static/LoadingSpinner';
import CriticalError from './components/Static/CriticalError';


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
    }, [data.resume, updateResume]);

    const updateResume = async () => {
        const locate = localStorage.getItem('@react-resume/language') || 'en';
        getResumeNode(locate).then(resume => {
            if(resume == null){
                const message = locate == "pt" ? 'Curriculo não localizado na base de dados' : 'Resume not found at database';
                setData({ ...data, error: message });
            } else {
                setData({ ...data, resume });
            }
        });
    } 

    if(data.error){
        return  <CriticalError message={data.error} />
    } else if (data.resume == null){
        return  <LoadingSpinner />
    }

    const createRoute = (comp, props) => {
        const extra = {updateResume: () => updateResume(), resume: data.resume};
        return React.createElement(comp, {...props, ...extra})
    }
    return (
        <div className={classNames('App', {})}>
            <Router history={history} >
                <Switch>
                    {/* <Route exact path={ROUTES.HOME.PATH} component={Index} /> */}
                    <Route exact path={ROUTES.HOME.PATH} component={(props) => createRoute(Index, props)} />
                    <Route path="/about" component={(props) => createRoute(About, props)} />
                    <Route path="/contact" component={(props) => createRoute(Contact, props)} />
                    <Route path="/resume" component={(props) => createRoute(Resume, props)} />
                    <Route path="/stats" component={(props) => createRoute(Stats, props)} />
                    {/* <Route component={Index} data={data} /> */}
                </Switch>
            </Router>
            <FocusTrap full={props.editorOpen} mobile={props.toolbarOpen} />
        </div>
    );
};

export default App;