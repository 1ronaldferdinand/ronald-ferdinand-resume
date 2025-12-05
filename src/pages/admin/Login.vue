<template>
    <div class="login-container">
        <div class="login-card">
            <h2>Admin Login</h2>
            <form @submit.prevent="login">
                <input type="password" v-model="password" placeholder="Enter Password" required />
                <button type="submit">Login</button>
            </form>
            <p v-if="error" class="error">{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminLogin',
    data() {
        return {
            password: '',
            error: ''
        };
    },
    methods: {
        login() {
            // MVP: Hardcoded password. In prod use real auth.
            if (this.password === 'admin123') {
                localStorage.setItem('admin_auth', 'true');
                this.$router.push('/admin/dashboard');
            } else {
                this.error = 'Invalid password';
            }
        }
    }
};
</script>

<style scoped>
.login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
}
.login-card {
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 6px 6px 12px var(--box-shadow-top-color), -6px -6px 12px var(--box-shadow-bottom-color);
    background-color: var(--bg-color);
    text-align: center;
}
input {
    margin: 1rem 0;
    padding: 0.5rem;
    width: 200px;
}
button {
    padding: 0.5rem 1rem;
    cursor: pointer;
}
.error {
    color: red;
}
</style>
