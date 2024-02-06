import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import CreateTask from '../views/tasks/CreateTask.vue';
import TaskList from '../views/tasks/TaskList.vue';
import TaskDetail from '../views/tasks/TaskDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/create-task', component: CreateTask },
  { path: '/task-list', component: TaskList },
  { path: '/task-detail/:taskId', component: TaskDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
