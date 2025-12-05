<template>
    <div v-if="loading" style="height: 100vh; display: flex; justify-content: center; align-items: center;">
        <p>Loading...</p>
    </div>
    <div v-else-if="error" style="height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
        <p>Project not found.</p>
        <router-link to="/" style="margin-top: 1rem; text-decoration: underline;">Go Home</router-link>
    </div>
    <DetailPage v-else :projects="project" />
</template>

<script>
import axios from 'axios';
import DetailPage from '../components/DetailPage.vue';
import { useHead } from '@vueuse/head';

export default {
    name: 'ProjectDetail',
    components: {
        DetailPage
    },
    data() {
        return {
            project: {},
            loading: true,
            error: false
        }
    },
    async created() {
        await this.fetchProject();
    },
    watch: {
        '$route.params.slug': 'fetchProject'
    },
    setup() {
      // Setup initial head, will be updated reactively
        useHead({
            title: 'Project Detail - Ronald Ferdinand',
             meta: [
                { name: 'description', content: 'Project details' }
            ]
        })
    },
    methods: {
        async fetchProject() {
            this.loading = true;
            this.error = false;
            const slug = this.$route.params.slug;
            try {
                const response = await axios.get(`/api/projects?slug=${slug}`);
                this.project = response.data;
                
                // Update Head dynamically
                useHead({
                    title: `${this.project.title} - Ronald Ferdinand`,
                    meta: [
                        { name: 'description', content: this.project.description }
                    ]
                });

            } catch (error) {
                console.error('Failed to fetch project', error);
                this.error = true;
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>
