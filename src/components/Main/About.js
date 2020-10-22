import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

import Main from './Main';

const docMarkdown = require('./data/about.md');


// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => {

    const [markdown, setMarkdown] = React.useState('');

    useEffect(() => {
        loadMarkdown();
      }, []);

    const loadMarkdown = async() => {
        fetch(docMarkdown)
            .then((res) => res.text())
            .then((md) => {
                setMarkdown(md);
        })

    }
    

    const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

    return(
        <Main>
            <Helmet title="About" />
            <article className="post" id="about">
            <header>
                <div className="title">
                <h2><Link to="/about">About Me</Link></h2>
                <p>(in about {count} words)</p>
                </div>
            </header>
            <ReactMarkdown
                children={markdown}
                allowDangerousHtml={true}
                renderers={{
                    Link: LinkRenderer,
                }}
            />
            </article>
        </Main>
    )
};

export default About;
