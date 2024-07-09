<template>
    <div v-if="visible" class="notification">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationModal',
    data() {
      return {
        visible: false,
        message: ""
      };
    },
    methods: {
      show(message) {
        this.message = message;
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000); // Notifikasi akan menghilang setelah 3 detik
      }
    }
  }
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  