import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Router } from 'react-router';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';
import { constants } from './config';
import { FocusTrap } from './helpers/app.helper';
import routes from './routes';
import './styles/App.css';

import About from './components/Main/About'
import Contact from './components/Main/Contact'
import Projects from './components/Main/Projects'
import Resume from './components/Main/Resume'
import Stats from './components/Main/Stats'
import Index from './components/Main/Index'
import './static/css/main.scss';

const history = createBrowserHistory();
const { ROUTES } = constants;
const { Home } = routes;


const App = (props) => {

    const [data, setData] = React.useState({
        openToolbar: false,
        swiftToogle: setData({...data, openToolbar: !data.openToolbar})
    });

    console.log("App");
    console.debug(props);
    
  return (
    <div className={classNames('App', {  })}>
      <Router history={history} >
        <Switch>
            <Route exact path="/" render={props => <Index {...data} />}  />
            {/* <Route exact path={ROUTES.HOME.PATH} component={Index} data={data}/> */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/stats" component={Stats} />
            {/* <Route component={Index} data={data} /> */}
        </Switch>
      </Router>
      <FocusTrap full={props.editorOpen} mobile={props.toolbarOpen} />
    </div>
  );
};

App.defaultProps = {
  editorOpen: false,
  simplesOpen: false,
  jsonOpen: false,
  toolbarOpen: false,
};

App.propTypes = {
  editorOpen: PropTypes.bool,
  simplesOpen: PropTypes.bool,
  jsonOpen: PropTypes.bool,
  toolbarOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  editorOpen: state.app.editorOpen,
  simplesOpen: state.app.simplesOpen,
  jsonOpen: state.app.jsonOpen,
  toolbarOpen: state.app.toolbarOpen,
});

export default connect(mapStateToProps)(App);
