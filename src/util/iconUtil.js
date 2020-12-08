import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const icoGithub = '/images/github.png';
const icoFacebook = '/images/facebook.png';
const icoInstagram = '/images/instagram.png';
const icoLinkedinIn = '/images/linkedin.png';
const icoTwitter = '/images/twitter.png';
const icoEnvelope = '/images/enveloper.png';
const icoWebsite = '/images/website.png';

export function getSocialIcon(socialName) {
  switch (socialName) {
    case 'Github':
      return faGithub;
    case 'Facebook':
      return faFacebook;
    case 'Instagram':
      return faInstagram;
    case 'LinkedIn':
      return faLinkedinIn;
    case 'Twitter':
      return faTwitter;
    case 'Email':
      return faEnvelope;
    default:
      return null;
  }
}

export function getSocialImage(socialName) {
  switch (socialName) {
    case 'Github':
      return icoGithub;
    case 'Facebook':
      return icoFacebook;
    case 'Instagram':
      return icoInstagram;
    case 'LinkedIn':
      return icoLinkedinIn;
    case 'Twitter':
      return icoTwitter;
    case 'Email':
      return icoEnvelope;
    case 'Website':
      return icoWebsite;
    default:
      return null;
  }
}
