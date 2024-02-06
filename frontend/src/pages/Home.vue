<template>
    <v-container fluid class="home-container">
        <v-row align="center" justify="center">
            <div>
                <v-card class="home-card" elevation="3">
                    <v-card-title class="headline">Bem-vindo à sua aplicação!</v-card-title>
                    <v-card-subtitle class="mb-4">Escolha uma opção abaixo:</v-card-subtitle>

                    <v-row justify="center">
                        <v-col cols="12" md="6" class="mb-4">
                            <v-btn to="/register" color="primary" block>Registrar</v-btn>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-btn to="/login" color="success" block>Login</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    name: 'Home',
};
</script>
  
<style scoped>
.home-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.home-card {
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
  