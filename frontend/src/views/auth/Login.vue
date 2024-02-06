<template>
    <v-container fluid class="login-container">
        <v-row align="center" justify="center">
            <div>
                <v-card class="login-card" elevation="3">
                    <v-card-title class="headline">Bem-vindo de volta!</v-card-title>
                    <v-card-subtitle class="mb-4">Faça login na sua conta</v-card-subtitle>

                    <v-form @submit.prevent="login">
                        <v-text-field v-model="email" label="E-mail" required></v-text-field>
                        <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
                        <v-btn type="submit" color="success" block>Entrar</v-btn>
                    </v-form>

                    <router-link to="/register">Ainda não tem uma conta? Registre-se aqui.</router-link>
                </v-card>
            </div>
        </v-row>
    </v-container>
</template>
  
<script>
import { loginUser } from '@/api/authApi';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const loginData = {
                    email: this.email,
                    password: this.password,
                };

                const { token } = await loginUser(loginData);

                console.log('JWT Token:', token);

                this.$router.push('/');
            } catch (error) {
                console.error('Error during login:', error);
            }
        },
    },
};
</script>
  
<style scoped>
.login-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-card {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    text-align: center;
}

.headline {
    font-size: 24px;
    font-weight: bold;
}

.mb-4 {
    margin-bottom: 1rem;
}
</style>
  