import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/HelloWorld.vue";
import ItemsList from '../components/items/ItemsList.vue';
import ItemsShow from '../components/items/ItemsShow.vue'
import ItemsAdd from '../components/items/ItemsAdd.vue';
import ItemsEdit from '../components/items/ItemsEdit.vue';

const routes = [
    { path: "/", name: "Home", component: Home },
   
    { 
      path: '/items', 
      component: ItemsList,
      name: 'items'
    },
    { 
      path: '/items/:id',
      name: 'items.show',
      component: ItemsShow,
      props: true
    },
    { path: '/items/add', 
    name: 'items.add',
    component: ItemsAdd },
    { 
      path: '/items/edit/:id', 
      name: 'items.edit',
      component: ItemsEdit ,
      props: true
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
