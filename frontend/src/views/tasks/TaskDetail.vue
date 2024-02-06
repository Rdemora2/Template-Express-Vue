<template>
    <v-container>
        <v-card>
            <v-card-title>{{ task.title }}</v-card-title>
            <v-card-subtitle>{{ task.description }}</v-card-subtitle>
            <v-card-subtitle>Status: {{ task.status }}</v-card-subtitle>
            <v-card-subtitle>Data de Criação: {{ task.createdAt }}</v-card-subtitle>
            <v-card-subtitle>Data de Atualização: {{ task.updatedAt }}</v-card-subtitle>
        </v-card>
    </v-container>
</template>
  
<script>
import { getTaskById } from '@/api/taskApi';

export default {
    data() {
        return {
            task: {}
        };
    },
    created() {
        const taskId = this.$route.params.id;

        this.fetchTaskById(taskId);
    },
    methods: {
        async fetchTaskById(taskId) {
            try {
                const taskDetails = await getTaskById(taskId);

                this.task = taskDetails;
            } catch (error) {
                console.error('Error fetching task details:', error);
            }
        }
    }
};
</script>
  