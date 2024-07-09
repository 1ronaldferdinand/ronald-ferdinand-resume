<template>
    <DetailPage :projects="projects" />
</template>
  
<script>
    import DetailPage from '../../components/DetailPage.vue';

    export default {
        name: 'WorxspacePage',
        components: {
            DetailPage
        },
        data() {
            return {
                projects: {
                    title: "Worxspace",
                    description: "Satu aplikasi yang berfungsi sebagai media informasi, komunikasi, kolaborasi hingga personalia perusahaan untuk menunjang produktivitas karyawan dalam perusahaan.",
                    jobdesc: [
                        'Mengimplementasikan API untuk mendukung fungsionalitas',
                        'Mengoptimalkan tampilan aplikasi web agar responsif di semua perangkat.',
                        'Mengembangkan dan memelihara aplikasi web menggunakan PHP Laravel dan Vue.js',
                    ],
                    images: [
                        '/images/wrx/image-1.png',
                        '/images/wrx/image-2.png',
                        '/images/wrx/image-3.png',
                        '/images/wrx/image-4.png',
                    ]
                }
            }
        }
    }
</script>