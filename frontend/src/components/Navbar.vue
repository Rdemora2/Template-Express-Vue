<template>
    <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Bem-vindo à sua aplicação!</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn v-if="!isAuthenticated" to="/register" color="primary">Registrar</v-btn>
        <v-btn v-if="!isAuthenticated" to="/login" color="success">Login</v-btn>

        <v-btn v-if="isAuthenticated" @click="logout" color="error">Logout</v-btn>
    </v-app-bar>
</template>
  
<script>
import { validateToken } from '@/api/authApi';

export default {
    computed: {
        isAuthenticated() {
            return this.$store.getters.getToken !== null;
        },
    },
    async created() {
        await this.checkAuthentication();
    },
    methods: {
        async checkAuthentication() {
            if (this.isAuthenticated) {
                try {
                    await validateToken(this.token);
                } catch (error) {
                    this.$store.dispatch('clearToken');
                }
            }
        },
        async logout() {
            this.$store.dispatch('clearToken');
            this.checkAuthentication();
        },
    },
};
</script>
  
<style scoped></style>
  