import React, { createContext, useState, useContext } from 'react';
import { Route, Switch, Router } from 'react-router';

import About from '../components/Main/About'
import Contact from '../components/Main/Contact'
import Projects from '../components/Main/Projects'
import Resume from '../components/Main/Resume'
import Stats from '../components/Main/Stats'
import Index from '../components/Main/Index'

import { constants } from '../config';

const { ROUTES } = constants;

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {

    const [data, setData] = useState({
        toolbarOpened: false,
    });

    async function swiftToolbar() {
        setData({ ...data, toolbarOpened: !data.toolbarOpened  })
    }

    return (
        <ToggleContext.Provider
            value={{ data, swiftToolbar }}>
            {children}
            <Router >
                <Switch>
                    <Route exact path="/" render={props => (
                    <ToggleProvider.Consumer>
                        {
                        context=><Index context={context} />
                        }
                    </ToggleProvider.Consumer>
                    )} />
                    {/* <Route exact path={ROUTES.HOME.PATH} component={Index} data={data}/> */}
                    {/* <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/stats" component={Stats} /> */}
                    {/* <Route component={Index} /> */}
                </Switch>
            </Router>
        </ToggleContext.Provider>
    );
};

function useToggle() {
    const context = useContext(ToggleContext);

    if (!context) {
        throw new Error('useAuth must be used within an ToggleProvider.');
    }

    return context;
}

export { ToggleProvider, useToggle };