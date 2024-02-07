// TaskList.vue

<template>
    <v-container>
        <v-list>
            <v-list-item v-for="task in tasks" :key="task.id">
                <v-list-item-content>
                    <v-list-item-title>{{ task.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
import { getTasks } from '@/api/taskApi';

export default {
    data() {
        return {
            tasks: [],
        };
    },
    created() {
        this.fetchTasks();
    },
    methods: {
        async fetchTasks() {
            try {
                const userId = this.$store.getters.getToken !== null;
                const taskList = await getTasks(userId);

                this.tasks = taskList;
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        },
    },
};
</script>
