import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { 
    faFacebook, 
    faInstagram, 
    faWhatsapp, 
    faGithub, 
    faLinkedin, 
    faTwitter, 
    faFacebookMessenger,
    faLaravel, 
    faPhp, 
    faVuejs, 
    faHtml5, 
    faCss3Alt, 
    faJs,
} from '@fortawesome/free-brands-svg-icons';

import { 
    faChevronRight, 
    faCopy, 
    faEnvelope, 
    faShare, 
    faX, 
    faDatabase 
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
    faFacebook, 
    faInstagram, 
    faWhatsapp, 
    faGithub, 
    faLinkedin, 
    faTwitter, 
    faFacebookMessenger, 
    faEnvelope, 
    faX, 
    faChevronRight, 
    faCopy, 
    faShare,
    faLaravel, 
    faPhp, 
    faVuejs, 
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faDatabase
);

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');