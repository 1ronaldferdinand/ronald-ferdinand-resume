<template>
    <div ref="content">
        <ThemeToggleComponent />
        <SocialMediaLinks :name="name" :email="email" :title="title" :description_id="description_id" :description_en="description_en" />
        <button v-if="showScrollBtn" class="scroll-btn" @click="scrollToBottom">Contact Me</button>
    </div>
</template>

<script>
import SocialMediaLinks from '../components/SocialMediaLinks.vue';
import ThemeToggleComponent from '../components/ThemeToggleComponent.vue';

export default {
    name: 'App',
    data() {
        return {
            name: "Ronald Ferdinand",
            email: "mail.ronaldferdinand@gmail.com",
            title: "Web Developer / Software Engineer / Full Stack Developer",
            description_en: "An engineer who is experienced in developing web-based applications, using PHP Laravel and VueJS technology. Capable of rapid learning and dedicated to continuous self-improvement, aiming for excellence in programming. Confident in delivering successful and innovative solutions.",
            description_id: "Seorang developer yang berpengalaman dalam mengembangkan aplikasi berbasis web, menggunakan teknologi PHP Laravel dan VueJS. Mampu belajar dengan cepat dan berkomitmen untuk terus-menerus meningkatkan diri, bertujuan untuk unggul dalam pemrograman. Percaya diri dalam memberikan solusi yang sukses dan inovatif.",

            showScrollBtn: true,
            contentHeight: 0,
            windowHeight: 0
        }
    },
    components: {
        SocialMediaLinks,
        ThemeToggleComponent
    },
    mounted() {
        this.$nextTick(() => {
            this.contentHeight = this.$refs.content.clientHeight;
            this.windowHeight = window.innerHeight;
            window.addEventListener('scroll', this.handleScroll);
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
