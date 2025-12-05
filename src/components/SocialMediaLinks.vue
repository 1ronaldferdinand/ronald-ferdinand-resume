<template>
    <div class="container">
        <h2 class="title" style="margin: 0px;" data-aos="fade-down">{{ profile.name }}</h2>
        <h3 class="title" style="margin: 16px 0px 8px 0px;" data-aos="fade-down" data-aos-delay="100">{{ profile.title }}</h3>
        <p class="description" style="margin: 0px; font-size: 14px;" data-aos="fade-in" data-aos-delay="200">
            {{ profile.description_id }}
        </p>

        <h3 class="subtitle" style="margin: 32px 0px 16px 0px;" data-aos="fade-right">My Skills</h3>
        <div class="skill-container" data-aos="zoom-in">   
            <div class="tech-stack">
                <fa-icon icon="fa-brands fa-php"/>
                <p>PHP</p>
            </div>
            <div class="tech-stack">
                <fa-icon icon="fa-brands fa-laravel"/>
                <p>Laravel</p>
            </div>
            <div class="tech-stack">
                <fa-icon icon="fa-brands fa-vuejs"/>
                <p>VueJS</p>
            </div>
            <div class="tech-stack">
                <fa-icon icon="fa-brands fa-js"/>
                <p>JS</p>
            </div>
            <div class="tech-stack">
                <fa-icon icon="fa-brands fa-html5"/>
                <p>HTML</p>
            </div>
            <div class="tech-stack">
                <fa-icon icon="fa-brands fa-css3-alt"/>
                <p>CSS</p>
            </div>
            <div class="tech-stack">
                <fa-icon icon="fa-solid fa-database"/>
                <p>MySQL</p>
            </div>
        </div>
        
        <h3 class="subtitle" style="margin: 16px 0px;" data-aos="fade-right">My Experiences</h3>
        <div class="exp-container" style="width: 100%;">
            <ExpComponent 
                v-for="(exp, index) in profile.experiences"
                :key="'exp-' + index"
                :title="exp.title"
                :company="exp.company"
                :date="exp.date"
                :description="exp.description"/>
        </div>

        <h3 class="subtitle" style="margin: 16px 0px;" data-aos="fade-right">My Educations</h3>
        <div class="exp-container" style="width: 100%;">
            <ExpComponent 
                v-for="(study, index) in profile.education"
                :key="'study-' + index"
                :title="study.title"
                :company="study.company"
                :date="study.date"
                :description="study.description"/>
        </div>

        <h3 class="subtitle" style="margin: 32px 0px 16px 0px;" data-aos="fade-right">My Project Portfolios</h3>
        <div class="link-container" style="width: 100%;">
            <LinkComponent
            v-for="(link, index) in projects"
            :key="'link-' + index"
            :image="link.image"
            :title="link.title"
            :url="link.url"
            />
        </div>
        
        <h3 class="subtitle" style="margin-top: 32px;" data-aos="fade-up">Contact Me</h3>
        <span @click="copyToClipboard" style="cursor: pointer; margin: 16px 0px;" data-aos="flip-up">{{ profile.email }}</span>
        <div class="links-display">
            <div class="social-link-container">
                <a class="social-link" href="https://github.com/1ronaldferdinand" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-2xl fa-github" />
                </a>
                <a class="social-link" href="https://www.linkedin.com/in/ronaldferdinand/" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-linkedin"/>
                </a>
                <a class="social-link" href="https://web.whatsapp.com/send?phone=6285156043840" target="_blank" rel="noopener noreferrer">
                    <fa-icon icon="fa-brands fa-lg fa-whatsapp" />
                </a>
            </div>
        </div>

        <NotificationModal ref="notification" />
    </div>
</template>

<script>
import NotificationModal from './NotificationModal.vue';
import LinkComponent from './LinkComponent.vue';
import ExpComponent from './ExpComponent.vue';

export default {
    name: 'SocialMediaLinks',
    props: {
        profile: {
            type: Object,
            default: () => ({})
        },
        projects: {
            type: Array,
            default: () => []
        }
    },
    components: {
        LinkComponent,
        ExpComponent,
        NotificationModal
    },
    data() {
        return {
           // Data moved to props
        };
    },
    methods: {
        copyToClipboard() {
            const textToCopy = this.profile.email;
            navigator.clipboard.writeText(textToCopy).then(() => {
                this.$refs.notification.show("Teks berhasil disalin ke clipboard");
            }).catch(err => {
                console.error("Gagal menyalin teks ke clipboard", err);
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%; overflow-x: hidden; overflow-y: auto;
}

.social-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.25rem;
    width: 100%;
}

.social-link {
    font-size: 2em;
}

.social-link:hover {
    transform: scale(1.1);
}

.links-display {
    padding-bottom: 32px;
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.exp-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tech-stack {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 48px;
    width: 48px;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 3px 3px 7px var(--box-shadow-top-color), -3px -3px 7px var(--box-shadow-bottom-color);
}

.skill-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 50%;
    margin-bottom: 16px;
}

@media (max-width: 992px) {
    .skill-container {
        width: 80%;
    }
}

.tech-stack p {
    font-size: 12px;
    margin: 0;
}

.description {
    width: 50%;
}

@media (max-width: 992px) {
    .description {
        min-width: 80%;
    }
}
</style>
