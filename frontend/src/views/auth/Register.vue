<template>
    <v-container fluid class="register-container">
        <v-row align="center" justify="center">
            <div>
                <v-card class="register-card" elevation="3">
                    <v-card-title class="headline">Crie sua conta</v-card-title>

                    <v-alert v-if="error" type="error" class="mb-4">{{ error }}</v-alert>

                    <v-form @submit.prevent="registerUser">
                        <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        <v-text-field v-model="password" :rules="passwordRules" label="Senha" type="password"
                            required></v-text-field>
                        <v-btn type="submit" color="primary" block>Registrar</v-btn>
                    </v-form>

                    <router-link to="/login">Já tem uma conta? Faça login aqui.</router-link>
                </v-card>
            </div>
        </v-row>
    </v-container>
</template>
  
<script>
import { registerUser } from '@/api/authApi';

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error: null,
            nameRules: [
                v => !!v || 'Nome é obrigatório',
            ],
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
        async registerUser() {
            try {
                const registrationData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                };

                const registeredUser = await registerUser(registrationData);

                this.$store.dispatch('saveToken', registeredUser.token);

                console.log('User registered:', registeredUser);

                this.$router.push('/');
            } catch (error) {
                this.error = 'Erro durante o registro: ' + error.message;
            }
        },
    },
};
</script>
  
<style scoped>
.register-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register-card {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    text-align: center;
}

.headline {
    font-size: 24px;
    font-weight: bold;
}
</style>
  