<template>
    <v-container fluid class="login-container">
        <v-row align="center" justify="center">
            <div>
                <v-card class="login-card" elevation="3">
                    <v-card-title class="headline">Bem-vindo de volta!</v-card-title>
                    <v-card-subtitle class="mb-4">Faça login na sua conta</v-card-subtitle>

                    <v-alert v-if="error" type="error" class="mb-4">{{ error }}</v-alert>

                    <v-form @submit.prevent="login">
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        <v-text-field v-model="password" :rules="passwordRules" label="Senha" type="password"
                            required></v-text-field>
                        <v-btn type="submit" color="success" dark block>Entrar</v-btn>
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
            error: null,
            emailRules: [
                v => !!v || 'E-mail é obrigatório',
                v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
            ],
            passwordRules: [
                v => !!v || 'Senha é obrigatória',
                v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(v) || 'Senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais',
            ],
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
                if (error.response && error.response.status === 401) {
                    this.error = 'Email ou senha incorreta. Por favor, tente novamente.';
                } else {
                    this.error = 'Erro durante o login: ' + error.message;
                }
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
  