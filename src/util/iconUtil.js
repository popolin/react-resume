import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

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
    }
}
