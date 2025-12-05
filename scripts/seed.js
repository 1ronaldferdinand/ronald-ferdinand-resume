require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('Please provide MONGODB_URI in .env.local');
    process.exit(1);
}

const client = new MongoClient(uri);

const profileData = {
    name: "Ronald Ferdinand",
    email: "mail.ronaldferdinand@gmail.com",
    title: "Web Developer / Software Engineer / Full Stack Developer",
    description_en: "An engineer who is experienced in developing web-based applications, using PHP Laravel and VueJS technology. Capable of rapid learning and dedicated to continuous self-improvement, aiming for excellence in programming. Confident in delivering successful and innovative solutions.",
    description_id: "Seorang developer yang berpengalaman dalam mengembangkan aplikasi berbasis web, menggunakan teknologi PHP Laravel dan VueJS. Mampu belajar dengan cepat dan berkomitmen untuk terus-menerus meningkatkan diri, bertujuan untuk unggul dalam pemrograman. Percaya diri dalam memberikan solusi yang sukses dan inovatif.",
    experiences: [
        {
            title: "Full-Stack Web Developer",
            company: "PT Imtek Media Data - Yogyakarta, ID",
            date: "Agustus 2024 - Sekarang",
            description: [
                'Merancang dan menerapkan API untuk mendukung fungsionalitas aplikasi.',
                'Mengembangkan dan memelihara aplikasi web menggunakan JavaScript, HTML, CSS, PHP, dan Vue.js.',
                'Mengelola dan mengoptimalkan basis data PostgreSQL.'
            ]
        },
        {
            title: "Web Engineer",
            company: "PT Gamatechno Indonesia - Yogyakarta, ID",
            date: "Juli 2023 - Juli 2024",
            description: [
                'Membuat dan mengembangkan aplikasi berbasis web berdasarkan spesifikasi desain dengan perhatian yang kuat terhadap detail, menggunakan Laravel dan VueJs.',
                'Melakukan debug dan menyelesaikan masalah secara efisien untuk memastikan kinerja code secara optimal.',
                'Mengoptimalkan dan meningkatkan tampilan aplikasi web agar responsif di semua perangkat.'
            ]
        },
        {
            title: "Fellow Full-Stack Web Developer",
            company: "PT Gamatechno Indonesia - Yogyakarta, ID",
            date: "Januari 2023 – Juli 2023",
            description: [
                'Merancang dan mengimplementasikan API untuk mendukung fungsionalitas web dan seluler.',
                'Mengembangkan dan memelihara aplikasi web menggunakan JavaScript, HTML, CSS, PHP, dan Vue.js.',
                'Mengelola dan mengoptimalkan database MySQL.'
            ]
        },
        {
            title: "Intern Front-End Web Developer",
            company: "PT Gamatechno Indonesia - Yogyakarta, ID",
            date: "September 2022 – Januari 2023",
            description: [
                'Membantu dalam mengembangkan dan memelihara komponen front-end aplikasi web menggunakan Laravel dan VueJs.',
                'Mengonversi maket desain menjadi halaman web yang fungsional.',
                'Menggunakan sistem kontrol versi seperti Git untuk manajemen kode dan kolaborasi.'
            ]
        },
        {
            title: "Computer Lab Assistant",
            company: "Universitas Amikom Yogyakarta - Yogyakarta, ID",
            date: "March 2021 – August 2021",
            description: [
                'Membantu dosen di laboratorium dengan menjelaskan dan membimbing mahasiswa selama perkuliahan.',
                'Evaluasi pengetahuan Query SQL siswa melalui tugas praktik.',
                'Dipercayakan sebagai koordinator asisten dosen pada mata kuliah ini.'
            ]
        },
    ],
    education: [
        {
            title: "Sarjana Informatika",
            company: "Universtias Amikom Yogyakarta",
            date: "September 2018 - Oktober 2022",
            description: [
                'GPA : 3.86'
            ]
        },
    ]
};

const projectsData = [
    {
        slug: 'worxspace',
        image: "/projects-logo/worxspace.ico",
        title: "Worxspace",
        url: "/projects/worxspace",
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
    },
    {
        slug: 'kasdana',
        image: "/projects-logo/kasdana.ico",
        title: "Kasdana",
        url: "/projects/kasdana",
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
    },
    {
        slug: '18hole',
        image: "/projects-logo/18hole.ico",
        title: "18 Hole",
        url: "/projects/18hole",
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
    },
    {
        slug: 'frontdesk',
        image: "/projects-logo/frontdesk.png",
        title: "Frontdesk",
        url: "/projects/frontdesk",
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
    },
    {
        slug: 'hmif',
        image: "/projects-logo/hmif.ico",
        title: "HMIF Dashboard",
        url: "/projects/hmif",
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
];

async function seed() {
    try {
        await client.connect();
        const db = client.db('ronald_resume');

        // Profile
        await db.collection('profile').updateOne({}, { $set: profileData }, { upsert: true });
        console.log('Profile seeded');

        // Projects
        for (const project of projectsData) {
            await db.collection('projects').updateOne({ slug: project.slug }, { $set: project }, { upsert: true });
        }
        console.log('Projects seeded');

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

seed();
