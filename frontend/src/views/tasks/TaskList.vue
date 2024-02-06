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
            tasks: []
        };
    },
    created() {
        this.fetchTasks();
    },
    methods: {
        async fetchTasks() {
            try {
                const taskList = await getTasks();

                this.tasks = taskList;
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
    }
};
</script>
  