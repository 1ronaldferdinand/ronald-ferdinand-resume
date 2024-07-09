<template>
    <DetailPage :projects="projects" />
</template>
  
<script>
    import DetailPage from '../../components/DetailPage.vue';

    export default {
        name: 'FrontdeskPage',
        components: {
            DetailPage
        },
        data() {
            return {
                projects: {
                    title: "Frontdesk",
                    description: "Aplikasi manajemen tamu pengganti buku tamu yang tradisional. Aplikasi ini dapat mencatat tamu yang berkunjung dan akan berkunjung serta paket atau kiriman yang datang, dan memberikan notifikasi tentang datangnya seorang tamu atau paket.",
                    jobdesc: [
                        'Mengimplementasikan API untuk mendukung fungsionalitas',
                        'Mengoptimalkan tampilan aplikasi web agar responsif di semua perangkat.',
                        'Mengembangkan dan memelihara aplikasi web menggunakan PHP Laravel dan Vue.js',
                    ],
                    images: [
                        '/images/fd/image-1.png',
                        '/images/fd/image-2.png',
                        '/images/fd/image-3.png',
                    ]
                }
            }
        }
    }
</script>