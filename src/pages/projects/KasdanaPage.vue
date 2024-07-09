<template>
    <DetailPage :projects="projects" />
</template>
  
<script>
    import DetailPage from '../../components/DetailPage.vue';

    export default {
        name: 'KasdanaPage',
        components: {
            DetailPage
        },
        data() {
            return {
                projects: {
                    title: "Kasdana",
                    description: "Aplikasi Pembuat Invoice untuk automasi penagihan dan pembayaran berbasis cloud yang akan membantu Anda mengelola seluruh urusan invoice secara lebih efektif dan efisien.",
                    jobdesc: [
                        'Mengoptimalkan tampilan aplikasi web agar responsif di semua perangkat.',
                        'Mengembangkan dan memelihara aplikasi web menggunakan PHP Laravel dan Vue.js',
                        'Merancang dan mengimplementasikan API untuk mendukung fungsionalitas',
                    ],
                    images: [
                        '/images/kd/image-1.png',
                        '/images/kd/image-2.png',
                        '/images/kd/image-3.png',
                    ]
                }
            }
        }
    }
</script>