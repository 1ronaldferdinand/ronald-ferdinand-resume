<template>
    <DetailPage :projects="projects" />
</template>
  
<script>
    import DetailPage from '../../components/DetailPage.vue';

    export default {
        name: 'HmifPage',
        components: {
            DetailPage
        },
        data() {
            return {
                projects: {
                    title: "HMIF",
                    description: "Halaman perusahaan untuk organisasi kampus HMIF Amikom Yogyakarta. Berisi artikel, berita dan informasi yang dimiliki oleh organisasi tersebut. Dapat menjadi media untuk komunikasi dari mahasiswa Informatika Amikom Yogyakarta dengan organisasi HMIF Amikom Yogyakarta",
                    jobdesc: [
                        'Merancang dan membuat alur data dan database aplikasi',
                        'Merancang dan membuat API untuk mendukung fungsionalitas',
                        'Memimpin dan membimbing programmer yang dimiliki organisasi HMIF untuk pengembangan'
                    ],
                    images: [
                        '/images/hmif/image-1.png',
                    ]
                }
            }
        }
    }
</script>