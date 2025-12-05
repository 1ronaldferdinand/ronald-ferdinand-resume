<template>
    <div class="dashboard-container">
        <header>
            <h1>Admin Dashboard</h1>
            <button @click="logout">Logout</button>
        </header>

        <section class="section">
            <h2>Edit Profile</h2>
            <form @submit.prevent="updateProfile">
                <div class="form-group">
                    <label>Name</label>
                    <input v-model="profile.name" />
                </div>
                 <div class="form-group">
                    <label>Title</label>
                    <input v-model="profile.title" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input v-model="profile.email" />
                </div>
                <div class="form-group">
                    <label>Description (EN)</label>
                    <textarea v-model="profile.description_en"></textarea>
                </div>
                <div class="form-group">
                    <label>Description (ID)</label>
                    <textarea v-model="profile.description_id"></textarea>
                </div>
                <button type="submit">Save Profile</button>
            </form>
             <p v-if="message" class="message">{{ message }}</p>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AdminDashboard',
    data() {
        return {
            profile: {},
            message: ''
        };
    },
    async mounted() {
        if (!localStorage.getItem('admin_auth')) {
            this.$router.push('/admin/login');
            return;
        }
        await this.fetchProfile();
    },
    methods: {
        async fetchProfile() {
            try {
                const res = await axios.get('/api/profile');
                this.profile = res.data;
            } catch (e) {
                console.error(e);
            }
        },
        async updateProfile() {
            try {
                await axios.post('/api/profile', this.profile);
                this.message = 'Profile updated successfully';
                setTimeout(() => this.message = '', 3000);
            } catch (e) {
                this.message = 'Failed to update profile';
            }
        },
        logout() {
            localStorage.removeItem('admin_auth');
            this.$router.push('/admin/login');
        }
    }
};
</script>

<style scoped>
.dashboard-container {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}
.section {
    background: var(--bg-color);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 6px 6px 12px var(--box-shadow-top-color), -6px -6px 12px var(--box-shadow-bottom-color);
}
.form-group {
    margin-bottom: 1rem;
    text-align: left;
}
label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}
input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}
textarea {
    height: 100px;
}
button {
    padding: 0.5rem 1rem;
    background-color: var(--font-color);
    color: var(--bg-color);
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
.message {
    margin-top: 1rem;
    color: green;
}
</style>
