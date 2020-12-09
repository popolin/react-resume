import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { getSocialIcon } from '../../util/iconUtil';

import Body, { IResume } from '../../components/Body';

const messagesEn = [
  'mail',
  'hi',
  'hello',
  'ola',
  'you-can-email-me-anything! really',
  'well, not-anything. but-most-things',
  'my email address is',
  'mail',
  'i-am-a-react-enthusiastic',
  'also-entrepreneur',
  'like-many-things-at-all =) ',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'please-work-for-us',
  'help',
  'admin',
  'an-idea',
  "I'll-stop-distracting-you-now",
  'thanks',
  'take-care',
  'see ya',
];

const messagesPt = [
  'mail',
  'ola',
  'e aí',
  'hello',
  'voce-pode-me-escrever-tudo! de-verdade!',
  'enfim, nao tudo. mas quase...',
  'meu email é',
  'mail',
  'sou-um-entusiasta-react',
  'tambem-sou-empreendedor',
  'afinal-gosto-de-muitas-coisas =) ',
  'voce.tambem.pode.me.escrever.coisas.simples',
  'apenas-dizendo-oi',
  'trabalhe-para-nos',
  'ajuda',
  'admin',
  'uma-ideia',
  'Vou-parar-de-distrair-voce-agora',
  'obrigado',
  'se liga',
];

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';

interface ContactProps {
  resume: IResume;
  updateResume: React.FunctionComponent;
}

const Contact: React.FC<ContactProps> = ({ resume, updateResume }) => {
  const { t } = useTranslation('main');

  const mailDomain = resume.header.email.split('@')[1];
  const mailName = resume.header.email.split('@')[0];
  const messages =
    currentLanguage === 'pt'
      ? messagesPt.map(message => (message === 'mail' ? mailName : message))
      : messagesEn.map(message => (message === 'mail' ? mailName : message));

  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 30; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useEffect(() => {
    const interval = setInterval(
      () => {
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
      },
      isActive ? delay : null,
    );
    return () => clearInterval(interval);
  }, [char, idx, isActive, messages]);

  return (
    <Body resume={resume} updateResume={updateResume}>
      <Helmet title={t('resume.contact.title')} />
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">{t('resume.contact.title')}</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>{t('resume.contact.description')}</p>
          <div
            className="inline-container"
            onMouseEnter={() => setIsActive(false)}
            onMouseLeave={() => idx < messages.length && setIsActive(true)}
          >
            <a href={`mailto:${resume.header.email}`}>
              <span>{message}</span>
              <span>{`@${mailDomain}`}</span>
            </a>
          </div>
        </div>
        <ul className="icons">
          {resume.contacts.map(s => (
            <li key={s.label}>
              <a href={s.link}>{getSocialIcon(s.label)}</a>
            </li>
          ))}
        </ul>
      </article>
    </Body>
  );
};

export default Contact;
