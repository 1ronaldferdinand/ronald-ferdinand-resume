<template>
    <ThemeToggleComponent />

    <div class="float-container">
        <router-link
            class="share-btn"
            to="/">
            Back
        </router-link>
    </div>

    <div class="container">
        <h2 class="title" style="margin: 16px 0px 8px 0px;">
            {{ projects? projects.title || "-" : "-" }}
        </h2>
        <p class="description" style="margin: 0;">{{ projects? projects.description || "-" : "-" }}</p>

        <h3 class="subtitle" style="margin: 32px 0px 0px 0px;">Job Descriptions</h3>
        <div v-if="projects && projects.jobdesc.length > 0" class="jobdescs-container">
            <ul>
                <li v-for="(job, index) in projects.jobdesc" :key="'jobdesc-' + index">
                    {{ job }}
                </li>
            </ul>
        </div>
        <div v-else>
            -
        </div>

        <h3 class="subtitle" style="margin: 32px 0px 16px 0px;">Project's Images</h3>
        <div v-if="projects && projects.images.length > 0" class="images-container">
            <div 
                class="image-container" 
                v-for="(image, index) in projects.images"                    
                :key="projects.title + '-' + index">
                <img
                    :src="image"
                    v-on:contextmenu.prevent
                    alt="project's image">
            </div>
        </div>
        <div v-else>
            -
        </div>
    </div>
</template>

<script>
import ThemeToggleComponent from '../components/ThemeToggleComponent.vue';

export default {
    name: 'App',
    props: {
        projects: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        ThemeToggleComponent
    }
};
</script>

<style>
.float-container {
    position: fixed;
    top: 2rem;
    left: calc(100vw - 90% - 1rem);
    z-index: 99;
}

.share-btn {
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
    background: var(--bg-color);
    box-shadow: 3px 3px 7px var(--box-shadow-top-color), -3px -3px 7px var(--box-shadow-bottom-color);
}

.share-btn:hover {
    background: var(--font-color);
    color: var(--bg-color);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%; 
    overflow-x: hidden; 
    overflow-y: auto;
}

.images-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-bottom: 32px;
}

.image-container {
    position: relative;
    width: 50%;
    overflow: hidden;
    transition: transform 0.3s ease;
    box-shadow: 3px 3px 7px var(--box-shadow-top-color), -3px -3px 7px var(--box-shadow-bottom-color);
}

.image-container img {
    width: 100%;
    object-fit: contain;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.image-container:hover {
    transform: scale(1.1);
    z-index: 999;
}

.jobdescs-container li {
    text-align: start;
}

.description {
    width: 50%;
}

.jobdescs-container {
    width: 50%;
}

@media (max-width: 992px) {
    .description {
        width: 80%;
    }

    .jobdescs-container {
        width: 80%;
    }
}
</style>
