import React, { useEffect } from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';

import { constants } from './config';
import { FocusTrap } from './helpers/app.helper';
import { getResumeData } from './services/api';

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
    });

    useEffect(() => {
        const findResume = async () => {
            setTimeout(() => {
                getResumeData().then(resume => {
                    setData({ ...data, resume });
                });
            }, 200);
        }
        findResume();
    }, []);

    if (data.resume == null) {
        return <p>Loading resume...</p>
    }

    const indexRoute = (props) => <Index resume={data.resume} {...props} />
    const aboutRoute = (props) => <About resume={data.resume} {...props} />
    const contactRoute = (props) => <Contact resume={data.resume} {...props} />
    const resumeRoute = (props) => <Resume resume={data.resume} {...props} />
    const statsRoute = (props) => <Stats resume={data.resume} {...props} />

    return (
        <div className={classNames('App', {})}>
            <Router history={history} >
                <Switch>
                    {/* <Route exact path={ROUTES.HOME.PATH} component={Index} /> */}
                    <Route exact path={ROUTES.HOME.PATH} component={indexRoute} />
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

// App.defaultProps = {
//     editorOpen: false,
//     simplesOpen: false,
//     jsonOpen: false,
//     toolbarOpen: false,
// };

// App.propTypes = {
//     editorOpen: PropTypes.bool,
//     simplesOpen: PropTypes.bool,
//     jsonOpen: PropTypes.bool,
//     toolbarOpen: PropTypes.bool,
// };

// const mapStateToProps = state => ({
//     editorOpen: state.app.editorOpen,
//     simplesOpen: state.app.simplesOpen,
//     jsonOpen: state.app.jsonOpen,
//     toolbarOpen: state.app.toolbarOpen,
// });

// export default connect(mapStateToProps)(App);
export default App;