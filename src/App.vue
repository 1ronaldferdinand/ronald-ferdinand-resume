<template>
    <div id="app" :class="themeClass">
        <router-view></router-view>
    </div>
</template>
  
<script>
export default {
    name: 'App',
    data() {
        return {
            isDarkTheme: false,
        };
    },
    computed: {
        themeClass() {
            return this.isDarkTheme ? 'dark-theme' : 'light-theme';
        },
    },
    created() {
        const preferredTheme = localStorage.getItem('theme');
        if (preferredTheme === 'dark') {
            this.isDarkTheme = true;
        }
    },
};
</script>  