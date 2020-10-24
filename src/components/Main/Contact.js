import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";

import {getSocialIcon} from '../../util/iconUtil'

import Main from './Main';

const messagesEn = [
    "mail",
    "hi",
    "hello",
    "ola",
    "you-can-email-me-anything! really",
    "well, not-anything. but-most-things",
    "mail",
    "i-am-a-react-enthusiastic",
    "also-entrepreneur",
    "like-many-things-at-all =) ",
    "you.can.also.email.me.with.specific.topics.like",
    "just-saying-hi",
    "please-work-for-us",
    "help",
    "admin",
    "an-idea",
    "I'll-stop-distracting-you-now",
    "thanks"
];

const messagesPt = [
    "mail",
    "ola",
    "e aí",
    "hello",
    "voce-pode-me-escrever-tudo! de-verdade!",
    "enfim, nao tudo. mas quase...",
    "mail",
    "sou-um-entusiasta-react",
    "tambem-sou-empreendedor",
    "afinal-gosto-de-muitas-coisas =) ",
    "voce.tambem.pode.me.escrever.coisas.simples",
    "apenas-dizendo-oi",
    "trabalhe-para-nos",
    "ajuda",
    "admin",
    "uma-deia",
    "Vou-parar-de-distrair-voce-agora",
    "obrigado"
];

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay) {
            const id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }
        return () => { }; // pass linter
    }, [delay]);
};

const Contact = ({ resume, updateResume }) => {

    const { t } = useTranslation('main');
    
    const mailDomain = resume.header.email.split('@')[1];
    const mailName = resume.header.email.split('@')[0];
    const messages = currentLanguage === "pt" ? 
                            messagesPt.map(message => message === "mail" ? mailName : message) : 
                            messagesEn.map(message => message === "mail" ? mailName : message);

    const hold = 50; // ticks to wait after message is complete before rendering next message
    const delay = 50; // tick length in mS

    const [idx, updateIter] = useState(0); // points to current message
    const [message, updateMessage] = useState(messages[idx]);
    const [char, updateChar] = useState(messages[idx].length); // points to current char
    const [isActive, setIsActive] = useState(true); // disable when all messages are printed

    useInterval(() => {
        let newIdx = idx;
        let newChar = char;
        if (char - hold >= messages[idx].length) {
            newIdx += 1;
            newChar = 0;
        }
        if (newIdx === messages.length) {
            setIsActive(false);
        } else {
            updateMessage(messages[newIdx].slice(0, newChar));
            updateIter(newIdx);
            updateChar(newChar + 1);
        }
    }, isActive ? delay : null);

    return (
        <Main resume={resume} updateResume={updateResume}>
            <Helmet title={t('resume.contact.title')} />
            <article className="post" id="contact">
                <header>
                    <div className="title">
                        <h2><Link to="/contact">{t('resume.contact.title')}</Link></h2>
                    </div>
                </header>
                <div className="email-at">
                    <p>{t('resume.contact.description')}</p>
                    <div
                        className="inline-container"
                        onMouseEnter={() => setIsActive(false)}
                        onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
                    >
                        <a href={`mailto:${resume.header.email}`}>
                            <span>{message}</span>
                            <span>{`@${mailDomain}`}</span>
                        </a>
                    </div>
                </div>
                <ul className="icons">
                    {resume.contacts.map((s) => (
                        <li key={s.label}>
                            <a href={s.link}>
                                <FontAwesomeIcon icon={getSocialIcon(s.label)} />
                            </a>
                        </li>
                    ))}
                </ul>
            </article>
        </Main>
    );
};

export default Contact;
