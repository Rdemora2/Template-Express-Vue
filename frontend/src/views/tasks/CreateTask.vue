<template>
    <v-container>
        <v-form @submit.prevent="createTask">
            <v-text-field v-model="title" label="Título" required></v-text-field>
            <v-text-field v-model="description" label="Descrição"></v-text-field>
            <v-select v-model="status" :items="statusOptions" label="Status" required></v-select>
            <v-btn type="submit" color="primary">Criar Tarefa</v-btn>
        </v-form>
    </v-container>
</template>
  
<script>
import { createTask } from '@/api/taskApi';

export default {
    data() {
        return {
            title: '',
            description: '',
            status: '',
            statusOptions: ['pendente', 'em andamento', 'concluída']
        };
    },
    methods: {
        async createTask() {
            try {
                const taskData = {
                    title: this.title,
                    description: this.description,
                    status: this.status,
                    token: 'your_jwt_token_here'
                };

                const createdTask = await createTask(taskData);

                console.log('Task created:', createdTask);
            } catch (error) {
                console.error('Error creating task:', error);
            }
        }
    }
};
</script>
  