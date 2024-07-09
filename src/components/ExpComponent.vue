<template>
    <div class="card-exp">
        <div class="title-container">
            <h4 style="margin: 0px; font-size: 14px;">{{ title }}</h4>
            <span style="opacity: 90%; font-size: 12px;">{{ date }}</span>
        </div>
        <span style="opacity: 90%; font-size: 12px;">{{ company }}</span>
        <ul v-if="description.length > 1" style="padding-left: 24px; margin-top: 8px; margin-bottom: 0px;">
            <li 
                v-for="(item, index) in description"
                :key="'exp-'+index"
                style="font-size: 12px;">
                {{ item }}
            </li>
        </ul>
        <span v-else-if="description.length > 0" style="font-size: 12px; margin-top: 8px;">
            {{ description[0] }}
        </span>
    </div>
</template>
  
<script>
export default {
    name: 'ExpComponent',
    props: {
        company: String,
        title: String,
        date: String,
        description: {
            type: Array,
            default: () => []
        } 
    },
}
</script>

<style>
.card-exp {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0.5rem;
    padding: 1rem;

    width: 50%;
    border-radius: 0.2rem;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 6px 6px 12px var(--box-shadow-top-color), -6px -6px 12px var(--box-shadow-bottom-color);

    transition: 0.5s ease;
    text-align: start;
}

@media (max-width: 992px) {
    .card-exp {
        width: 80%;
    }
}

.title-container {
    width: 100%;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
}
</style>
