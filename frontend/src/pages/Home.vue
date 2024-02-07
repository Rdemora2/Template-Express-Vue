<template>
    <v-container fluid class="home-container">
        <v-row align="center" justify="center">
            <div v-if="isAuthenticated">
                <TaskList />
            </div>
            <div v-else>
                <v-card class="home-card" elevation="3">
                    <v-card-title class="headline">Bem-vindo à sua aplicação!</v-card-title>
                    <v-card-subtitle class="mb-4">Sou um template vue.js com backend express</v-card-subtitle>
                </v-card>
            </div>
        </v-row>
    </v-container>
</template>
  
<script>
import TaskList from '@/views/tasks/TaskList.vue';

export default {
    name: 'Home',
    components: {
        TaskList,
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.getToken !== null;
        },
    },
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
  