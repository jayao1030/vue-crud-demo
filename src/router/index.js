import { createRouter, createWebHistory } from 'vue-router';
import Member from '../views/Member.vue';
import AddMembers from '../views/AddMembers.vue';
import EditMembers from '../views/EditMembers.vue';

const routes = [
  {
    path: '/',
    name: 'Member',
    component: Member,
  },
  {
    path: '/add',
    name: 'AddMembers',
    component: AddMembers,
  },
  {
    path: '/members/:id',
    name: 'EditMembers',
    component: EditMembers,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
