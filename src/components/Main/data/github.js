import dayjs from 'dayjs';

import 'dayjs/locale/pt-br'
import 'dayjs/locale/en'

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';
const locale = currentLanguage == "pt" ? 'pt-br' : 'en';
const dayLocale = dayjs().locale(locale);
var formattedData = dayLocale.format("MMMM D, YYYY");
if(currentLanguage == "pt"){
    formattedData = `${dayLocale.format("D")} de ${dayLocale.format("MMMM")} de ${dayLocale.format("YYYY")}`;
}

// TODO To be provided by an API
const data = [
  {
    label: 'resume.stats.stars',
    key: 'stargazers_count',
    value: '0',
    link: 'https://github.com/popolin/react-resume/stargazers',
  }, {
    label: 'resume.stats.watchers',
    key: 'subscribers_count',
    value: '1',
    link: 'https://github.com/popolin/react-resume/stargazers',
  }, {
    label: 'resume.stats.forks',
    key: 'forks',
    value: '0',
    link: 'https://github.com/popolin/react-resume/network',
  }, {
    label: 'resume.stats.warnings',
    // TODO ammend this with a pre-commit hook
    // `npm run lint | grep problems | tail -1 | awk '{print $2}'`
    value: '0',
  }, {
    label: 'resume.stats.issues',
    key: 'open_issues_count',
    value: '0',
    link: 'https://github.com/popolin/react-resume/issues',
  }, {
    label: 'resume.stats.lastUpdate',
    key: 'resume.stats.pushed_at',
    value: formattedData,
    link: 'https://github.com/popolin/react-resume/commits',
  },
  { /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'resume.stats.lines',
    value: '2625',
    link: 'https://github.com/popolin/react-resume/graphs/contributors',
  },
];

export default data;
