<template>
    <DetailPage :projects="projects"/>
</template>
  
<script>
    import DetailPage from '../../components/DetailPage.vue';

    export default {
        name: 'DelapanBelasHolePage',
        components: {
            DetailPage
        },
        data() {
            return {
                projects: {
                    title: "18 Hole",
                    description: "18hole adalah aplikasi yang membuat bermain Golf menjadi lebih seru. Catat skor & kelola handicap kamu, buat dan bergabung dengan komunitas golf kamu secara virtual, buat turnamen dan pantau leaderboard secara realtime. Kamu juga bisa melakukan reservasi lapangan Golf secara online.",
                    jobdesc: [
                        'Mengimplementasikan API untuk mendukung fungsionalitas',
                        'Mengoptimalkan tampilan aplikasi web agar responsif di semua perangkat.',
                        'Mengembangkan dan memelihara aplikasi web menggunakan PHP Laravel dan Vue.js',
                    ],
                    images: [
                        '/images/18h/image-1.png',
                        '/images/18h/image-2.png',
                        '/images/18h/image-3.png',
                    ]
                }
            }
        }
    }
</script>