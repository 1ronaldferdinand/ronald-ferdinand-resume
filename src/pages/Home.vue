    <div ref="content">
        <ThemeToggleComponent />
        <div v-if="loading" style="height: 100vh; display: flex; justify-content: center; align-items: center;">
            <p>Loading...</p>
        </div>
        <SocialMediaLinks v-else :profile="profile" :projects="projects" />
        <button v-if="showScrollBtn" class="scroll-btn" @click="scrollToBottom">Contact Me</button>
    </div>
</template>

<script>
import axios from 'axios';
import SocialMediaLinks from '../components/SocialMediaLinks.vue';
import ThemeToggleComponent from '../components/ThemeToggleComponent.vue';
import { useHead } from '@vueuse/head';

export default {
    name: 'App',
    data() {
        return {
            profile: {},
            projects: [],
            loading: true,
            showScrollBtn: true,
            contentHeight: 0,
            windowHeight: 0
        }
    },
    components: {
        SocialMediaLinks,
        ThemeToggleComponent
    },
    async mounted() {
        try {
            const [profileRes, projectsRes] = await Promise.all([
                axios.get('/api/profile'),
                axios.get('/api/projects')
            ]);
            this.profile = profileRes.data;
            this.projects = projectsRes.data;
        } catch (error) {
            console.error('Failed to fetch data', error);
        } finally {
            this.loading = false;
        }

        this.$nextTick(() => {
            if (this.$refs.content) {
                this.contentHeight = this.$refs.content.clientHeight;
                this.windowHeight = window.innerHeight;
                window.addEventListener('scroll', this.handleScroll);
            }
        });
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToBottom() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            const scrollPosition = window.scrollY || window.pageYOffset;
            const bottomPosition = this.contentHeight - this.windowHeight;
            if (scrollPosition > bottomPosition) {
                this.showScrollBtn = false;
            } else {
                this.showScrollBtn = true;
            }
        }
    },
    setup() {
        useHead({
            title: 'Ronald Ferdinand - Full Stack Developer',
            meta: [
                { name: 'description', content: 'Portfolio of Ronald Ferdinand, a Full Stack Developer specialized in Vue.js and Laravel.' },
                { property: 'og:title', content: 'Ronald Ferdinand - Portfolio' },
                { property: 'og:description', content: 'Check out my projects and skills.' }
            ]
        });
    }
};
</script>

<style>
@import '../../public/css/colors.css';

#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--font-color);
    background-color: var(--bg-color);
}

html {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg-color);
    color: var(--font-color);
}

a {
    color: var(--font-color);
    text-decoration: none;
    transition: all 0.3s ease;
}

fa-icon {
    color: var(--font-color);
}

.scroll-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: var(--font-color);
    color: var(--bg-color);
    border: none;
    cursor: pointer;
    border-radius: 5px;
    z-index: 9999;
    box-shadow: 6px 6px 12px var(--box-shadow-top-color), -6px -6px 12px var(--box-shadow-bottom-color);
}

.scroll-btn:hover {
    background-color: var(--bg-color);
    color: var(--font-color);
    border: 1px solid var(--font-color);
}
</style>
